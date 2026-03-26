'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

import ThemeToggle from '../ui/ThemeToggle';

const NAV_ITEMS = [
  { label: 'Sobre mí',        href: '#about' },
  { label: 'Habilidades',     href: '#skills' },
  { label: 'Proyectos',       href: '#projects' },
  { label: 'Certificaciones', href: '#certifications' },
  { label: 'Contacto',        href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--color-surface)]/90 backdrop-blur-md border-b border-[var(--color-border)] shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-heading font-bold text-lg text-[var(--color-text)] hover:text-brand transition-colors duration-150"
        >
          Felipe<span className="text-brand">.</span>
        </a>

        {/* Desktop nav + actions */}
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-1 mr-2">
            {NAV_ITEMS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={cn(
                  'px-4 py-2 text-sm rounded-lg transition-colors duration-150',
                  active === href
                    ? 'text-brand bg-brand/10'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]'
                )}
              >
                {label}
              </button>
            ))}
          </nav>
          
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[var(--color-surface-2)] transition-colors ml-1"
          >
          <span className={cn('block w-5 h-0.5 bg-current transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
          <span className={cn('block w-5 h-0.5 bg-current transition-all duration-300', menuOpen && 'opacity-0')} />
          <span className={cn('block w-5 h-0.5 bg-current transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="px-4 pb-4 flex flex-col gap-1 bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
          {NAV_ITEMS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              className="text-left px-4 py-3 text-sm text-[var(--color-text-muted)] hover:text-brand hover:bg-brand/5 rounded-lg transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
