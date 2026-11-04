'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '../../lib/utils';

import ThemeToggle from '../ui/ThemeToggle';

const NAV_ITEMS = [
  { label: 'Sobre mí',        href: '#about' },
  { label: 'Habilidades',     href: '#skills' },
  { label: 'Proyectos',       href: '#projects' },
  { label: 'Certificaciones', href: '#certifications' },
  { label: 'Contacto',        href: '#contact' },
];

const MOBILE_MENU_ID = 'menu-movil';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Marca la sección visible mientras se hace scroll, no solo al hacer clic.
  useEffect(() => {
    if (!isHome) return;
    const sections = NAV_ITEMS
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  // Esc cierra el menú móvil.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Enlaces reales ("/#about"): se pueden abrir en otra pestaña, compartir y
  // funcionan desde cualquier página. En la portada se hace scroll suave.
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    if (!isHome || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', href);
    setActive(href);
  };

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || menuOpen
          ? 'bg-[color:color-mix(in_srgb,var(--color-surface)_90%,transparent)] backdrop-blur-md border-b border-[var(--color-border)] shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Inicio"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="font-heading font-bold text-lg text-[var(--color-text)] hover:text-brand transition-colors duration-150"
        >
          Felipe<span className="text-brand">.</span>
        </Link>

        {/* Desktop nav + actions */}
        <div className="flex items-center gap-2">
          <nav aria-label="Secciones" className="hidden md:flex items-center gap-1 mr-2">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={`/${href}`}
                onClick={(e) => handleNav(e, href)}
                aria-current={active === href ? 'location' : undefined}
                className={cn(
                  'px-4 py-2 text-sm rounded-lg transition-colors duration-150',
                  active === href
                    ? 'text-brand bg-brand/10'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]'
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[var(--color-surface-2)] transition-colors ml-1"
          >
            <span className={cn('block w-5 h-0.5 bg-current transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('block w-5 h-0.5 bg-current transition-all duration-300', menuOpen && 'opacity-0')} />
            <span className={cn('block w-5 h-0.5 bg-current transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
          </button>
        </div>
      </div>

      {/* Mobile menu: "invisible" al cerrar para que sus enlaces no reciban foco con Tab */}
      <div
        id={MOBILE_MENU_ID}
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-80 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        )}
      >
        <nav aria-label="Secciones" className="px-4 pb-4 flex flex-col gap-1 bg-[color:color-mix(in_srgb,var(--color-surface)_95%,transparent)] backdrop-blur-md border-b border-[var(--color-border)]">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={`/${href}`}
              onClick={(e) => handleNav(e, href)}
              aria-current={active === href ? 'location' : undefined}
              className="text-left px-4 py-3 text-sm text-[var(--color-text-muted)] hover:text-brand hover:bg-brand/5 rounded-lg transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
