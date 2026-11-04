'use client';

import { usePathname } from 'next/navigation';

/** Oculta su contenido en el panel /admin (p. ej. el footer público). */
export default function HideOnAdmin({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;
  return <>{children}</>;
}
