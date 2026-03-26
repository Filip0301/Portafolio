'use client';

import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import { Project } from '../../types/portfolio';

// Static projects
const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Dashboard Path to Conversion',
    description:
      'Diseño y desarrollo de dashboard en Power BI para Havas, analizando el path to conversion de usuarios. Integración de datos desde CM360 y Funnel.io para visualizar el customer journey completo.',
    tags: ['Power BI', 'CM360', 'Funnel.io'],
    disciplines: ['Data Analysis', 'Business Intelligence'],
    featured: true,
  },
  {
    id: '2',
    title: 'Reportes de Viewability',
    description:
      'Sistema de reportería para métricas de viewability de campañas publicitarias en Havas. Extracción y transformación de datos para asegurar el cumplimiento de KPIs de visibilidad.',
    tags: ['Reporting', 'Digital Marketing', 'KPI Tracking'],
    disciplines: ['Data Analysis'],
    featured: true,
  },
  {
    id: '3',
    title: 'Looker Studio Dashboard — SOAP Bomberos',
    description:
      'Dashboard ejecutivo en Looker Studio conectado a GA4 y PostgreSQL para visualizar el funnel de compras de seguros vehiculares y donaciones a Bomberos de Chile.',
    tags: ['Looker Studio', 'GA4', 'PostgreSQL', 'SQL'],
    disciplines: ['Data Analysis', 'Business Intelligence'],
    featured: true,
  },
  {
    id: '4',
    title: 'E-Commerce Full Stack',
    description:
      'Plataforma de e-commerce con admin portal, carrito, proceso de checkout multi-paso, gestión de usuarios y panel administrativo con métricas de ventas.',
    tags: ['Next.js', 'React', 'PostgreSQL'],
    disciplines: ['Web Development', 'Full Stack'],
    featured: false,
  },
  {
    id: '5',
    title: 'Portafolio Personal',
    description:
      'Portafolio moderno-minimalista con Next.js, TypeScript, y Firebase. Arquitectura modular, seguridad por headers HTTP, modo oscuro/claro.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    disciplines: ['Web Development', 'Frontend'],
    github_url: 'https://github.com/macfelipe/portafolio',
    featured: false,
  },
  {
    id: '6',
    title: 'Análisis de Ventas — Reporte SMU',
    description:
      'Pipeline de análisis de datos para supermercados: ETL en Python, visualizaciones en Pandas/Matplotlib y reporte automatizado con métricas KPI.',
    tags: ['Python', 'Pandas', 'ETL', 'SQL'],
    disciplines: ['Data Analysis', 'Backend'],
    featured: false,
  },
];

import { useProjects } from '../../hooks/useProjects';

const ALL_STATIC_DISCIPLINES = Array.from(new Set(PROJECTS.flatMap(p => p.disciplines)));

export default function ProjectsSection() {
  const { projects: firebaseProjects, loading } = useProjects();
  const [activeDiscipline, setActiveDiscipline] = useState<string>('');

  // Fallback to static PROJECTS if Firebase has no projects yet
  const displayProjects = firebaseProjects.length > 0 ? firebaseProjects : PROJECTS;
  const displayDisciplines = firebaseProjects.length > 0 
    ? Array.from(new Set(firebaseProjects.flatMap(p => p.disciplines || [])))
    : ALL_STATIC_DISCIPLINES;

  const filtered = activeDiscipline
    ? displayProjects.filter(p => p.disciplines && p.disciplines.includes(activeDiscipline))
    : displayProjects;

  return (
    <section id="projects" className="py-[var(--section-padding)]">
      <div className="section-container">
        <SectionHeader
          number="03. Proyectos"
          title="Trabajo Destacado"
          subtitle="Proyectos organizados por área de desempeño."
        />

        {/* Discipline filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveDiscipline('')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-150 ${
              !activeDiscipline
                ? 'bg-brand text-white shadow-md shadow-brand/20'
                : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-brand/40 hover:text-brand'
            }`}
          >
            Todos
          </button>
          {displayDisciplines.map(discipline => (
            <button
              key={discipline}
              onClick={() => setActiveDiscipline(discipline === activeDiscipline ? '' : discipline)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-150 ${
                activeDiscipline === discipline
                  ? 'bg-brand text-white shadow-md shadow-brand/20'
                  : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-brand/40 hover:text-brand'
              }`}
            >
              {discipline}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(project => (
            <Card
              key={project.id}
              className="p-6 flex flex-col gap-4 group"
              hover
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </div>
                <div className="flex gap-3">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="text-[var(--color-text-subtle)] hover:text-brand transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                      className="text-[var(--color-text-subtle)] hover:text-brand transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Title & description */}
              <div>
                <h3 className="font-heading font-semibold text-[var(--color-text)] group-hover:text-brand transition-colors duration-150 mb-2">
                  {project.title}
                  {project.featured && (
                    <span className="ml-2 text-xs text-brand font-mono opacity-60">★</span>
                  )}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags & Disciplines */}
              <div className="flex flex-col gap-3 mt-auto pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="muted">{tag}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--color-border)]">
                  {project.disciplines.map(disc => (
                    <span key={disc} className="text-xs uppercase tracking-wider text-brand font-medium">
                      {disc}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
