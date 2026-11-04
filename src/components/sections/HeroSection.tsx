'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Button from '../ui/Button';
import { normalizeUrl } from '../../lib/utils';
import type { PersonalInfo, SocialMedia } from '../../types/portfolio';

const ROLES = [
  'Data Analyst',
  'Full Stack Developer',
  'BI Developer',
  'Python Developer',
];

interface HeroSectionProps {
  info: PersonalInfo;
  socialMedia: SocialMedia[];
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

export default function HeroSection({ info, socialMedia }: HeroSectionProps) {
  const [roleIndex, setRoleIndex]     = useState(0);
  const [displayed, setDisplayed]     = useState('');
  const [charIdx, setCharIdx]         = useState(0);
  const [deleting, setDeleting]       = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );

  // Typewriter effect (se desactiva si el sistema pide reducir el movimiento).
  // Cada paso se agenda con setTimeout; el efecto no cambia estado directamente.
  useEffect(() => {
    if (reduceMotion) return;
    const current = ROLES[roleIndex];
    let delay: number;
    let step: () => void;
    if (!deleting && charIdx <= current.length) {
      delay = 80;
      step = () => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c + 1); };
    } else if (!deleting) {
      delay = 1800;
      step = () => setDeleting(true);
    } else if (charIdx >= 0) {
      delay = 40;
      step = () => { setDisplayed(current.slice(0, charIdx)); setCharIdx(c => c - 1); };
    } else {
      delay = 0;
      step = () => { setDeleting(false); setCharIdx(0); setRoleIndex(i => (i + 1) % ROLES.length); };
    }
    const t = setTimeout(step, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIndex, reduceMotion]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background grid + gradient */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.12) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(37,99,235,0.06)', animation: 'float 8s ease-in-out infinite' }}
        aria-hidden
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(96,165,250,0.06)', animation: 'float 10s ease-in-out infinite reverse' }}
        aria-hidden
      />

      <div className="section-container relative z-10 text-center pt-24 pb-16">
          <>
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/5 text-brand text-sm font-medium mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              Disponible para nuevos proyectos
            </div>

            {/* Name */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-text)] mb-6 animate-slide-up">
              {info.name}
            </h1>

            {/* Animated role */}
            <div className="h-12 sm:h-14 flex items-center justify-center mb-6 animate-slide-up delay-100">
              <span className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium text-gradient">
                {/* Los lectores de pantalla leen la lista completa, no letras sueltas */}
                <span className="sr-only">{ROLES.join(', ')}</span>
                <span aria-hidden="true">
                  {reduceMotion ? ROLES[0] : displayed}
                  {!reduceMotion && (
                    <span className="inline-block w-0.5 h-7 ml-0.5 bg-brand align-middle animate-type-cursor" />
                  )}
                </span>
              </span>
            </div>

            {/* Description */}
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-200">
              {info.description}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up delay-300">
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollTo('#projects')}
              >
                Ver proyectos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => scrollTo('#contact')}
              >
                Contacto
              </Button>
            </div>

            {/* Social links */}
            {socialMedia.filter(s => s.isActive).length > 0 && (
              <div className="flex items-center justify-center gap-4 animate-slide-up delay-400">
                <span className="text-xs text-[var(--color-text-subtle)] uppercase tracking-widest">
                  Sígueme en
                </span>
                <div className="w-8 h-px bg-[var(--color-border)]" />
                {socialMedia.filter(s => s.isActive).map((s, i) => (
                  <a
                    key={s.id ?? i}
                    href={normalizeUrl(s.url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-muted)] hover:text-brand transition-colors duration-150 font-medium"
                  >
                    {s.platform}
                  </a>
                ))}
              </div>
            )}
          </>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo('#about')}
          aria-label="Ir a Sobre mí"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-text-subtle)] hover:text-brand transition-colors duration-150 group"
          style={{ animation: 'float 2s ease-in-out infinite' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
