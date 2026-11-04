// Datos del sitio que se repiten en metadatos, imagen para redes, robots y sitemap.

export const SITE_NAME = 'Felipe Ismael Torres Ponce de León';
export const SITE_ROLE = 'Data Analyst & Full Stack Developer';
export const SITE_TITLE = `${SITE_NAME} | ${SITE_ROLE}`;
export const SITE_DESCRIPTION =
  `Portafolio de ${SITE_NAME} — Ingeniero en Informática especializado en análisis de datos, BI y desarrollo web full stack.`;

/**
 * URL pública del sitio, usada para enlaces canónicos, sitemap y la imagen
 * al compartir. Define NEXT_PUBLIC_SITE_URL en Vercel cuando tengas dominio
 * propio; mientras tanto se usa el dominio de producción que asigna Vercel.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '') ||
  'http://localhost:3000'
).replace(/\/$/, '');
