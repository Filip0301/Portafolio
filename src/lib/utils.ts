import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Convierte una URL guardada sin protocolo (p. ej. "www.linkedin.com/in/...")
 * en una URL absoluta. Sin esto el navegador la trata como ruta relativa
 * del propio sitio y termina en un 404.
 */
export function normalizeUrl(url: string | undefined | null): string {
  const value = (url ?? '').trim();
  if (!value) return '';
  if (/^(https?:|mailto:|tel:)/i.test(value)) return value;
  if (value.startsWith('//')) return `https:${value}`;
  if (value.startsWith('/') || value.startsWith('#')) return value;
  return `https://${value}`;
}
