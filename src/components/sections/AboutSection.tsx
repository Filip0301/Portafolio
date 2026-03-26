'use client';

import React from 'react';
import { usePersonalInfo } from '../../hooks/usePersonalInfo';
import SectionHeader from '../ui/SectionHeader';
import LoadingSpinner from '../ui/LoadingSpinner';

const STATS = [
  { value: '3+',  label: 'Años de experiencia' },
  { value: '15+', label: 'Proyectos completados' },
  { value: '10+', label: 'Tecnologías' },
  { value: '∞',   label: 'Ganas de aprender' },
];

export default function AboutSection() {
  const { data, loading } = usePersonalInfo();

  return (
    <section id="about" className="py-[var(--section-padding)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <SectionHeader
              number="01. Sobre mí"
              title="Data + Development"
              subtitle="Combino análisis de datos con desarrollo web para construir soluciones completas, desde la ETL hasta la interfaz de usuario."
            />

            {loading ? (
              <LoadingSpinner />
            ) : (
              <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  Soy <strong className="text-[var(--color-text)]">Ingeniero en Informática</strong> con pasión
                  por convertir datos en decisiones. Me especializo en análisis de datos, visualización con
                  dashboards interactivos y desarrollo full stack con tecnologías modernas.
                </p>
                <p>
                  {data?.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 text-sm text-brand">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {data?.location ?? 'Chile'}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-brand">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {data?.email ?? 'contacto@felipezuniga.dev'}
                  </span>
                </div>
                <div className="pt-4">
                  <a
                    href="/Documents/CV_Felipe_Zuniga.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-lg border border-brand/40 text-brand hover:bg-brand/10 transition-colors duration-150 font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Descargar CV
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="glass glass-hover rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="font-heading text-4xl font-bold text-gradient mb-2">
                  {value}
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
