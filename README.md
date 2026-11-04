# Portafolio — Felipe Ismael Torres Ponce de León

Portafolio personal de Data Analyst & Full Stack Developer, con un panel de administración para editar el contenido sin tocar código.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3**
- **Firebase**: Firestore guarda el contenido y Auth protege el panel `/admin`
- Publicado en **Vercel**

## Cómo funciona

- **Sitio público** (`/`): se genera en el servidor y se cachea 5 minutos (ISR).
  - Lee Firestore con su API REST ([`src/lib/portfolioData.ts`](src/lib/portfolioData.ts)), así que el HTML llega con todo el contenido y el sitio no descarga el SDK de Firebase.
- **Panel** (`/admin`): inicia sesión con Firebase Auth para editar perfil, redes, habilidades, proyectos y certificaciones.
  - Los cambios se ven en el sitio en un máximo de 5 minutos.
- **Seguridad**: cualquiera puede leer el contenido, pero solo el UID del administrador puede escribirlo ([`firestore.rules`](firestore.rules)).

## Desarrollo local

Requisitos: Node.js 20.9 o superior.

```bash
npm install
cp .env.example .env.local   # completa los valores de tu proyecto de Firebase
npm run dev                  # http://localhost:3000
```

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run lint` | ESLint |
| `npm run typecheck` | Verificación de tipos |

El CI ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) corre lint, typecheck y build en cada PR.

## Variables de entorno

Están en [`.env.example`](.env.example). Las `NEXT_PUBLIC_FIREBASE_*` son la configuración pública de la app web de Firebase. Las opcionales son:

- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`: activa Google Analytics.
- `NEXT_PUBLIC_SITE_URL`: dominio público, que se usa para canonical, sitemap e imagen al compartir.

## Reglas de Firestore

1. En [`firestore.rules`](firestore.rules), reemplaza `REEMPLAZAR_CON_TU_UID` por tu UID (Firebase Console → Authentication → Users).
2. Despliega:

   ```bash
   npx firebase-tools deploy --only firestore:rules
   ```

3. En Authentication → Settings → User actions, desactiva la creación de cuentas para que nadie más pueda registrarse.

## Estructura

```
src/
  app/            rutas (portada, /admin, 404, robots, sitemap, imagen OG)
  components/
    layout/       navbar y footer
    sections/     secciones de la portada
    ui/           componentes reutilizables (botones, tarjetas, íconos)
  lib/            lectura de datos, datos del sitio y utilidades
  services/       escritura en Firestore (usada por /admin)
  types/          tipos compartidos
```
