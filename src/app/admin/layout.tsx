import type { Metadata } from 'next';

// El panel no debe aparecer en buscadores (page.tsx es un componente de
// cliente y no puede exportar metadata, por eso va en este layout).
export const metadata: Metadata = {
  title: 'Administración',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
