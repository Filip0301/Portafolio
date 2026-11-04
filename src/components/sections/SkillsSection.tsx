'use client';

import React, { useMemo, useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import TechIcon from '../ui/TechIcon';
import { cn } from '../../lib/utils';
import type { Skill } from '../../types/portfolio';

interface SkillsSectionProps {
  skills: Skill[];
  error?: boolean;
}

export default function SkillsSection({ skills, error = false }: SkillsSectionProps) {
  const categories = useMemo(
    () => Array.from(new Set(skills.map(s => s.category))).sort(),
    [skills]
  );
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] ?? '');

  const filtered = skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-[var(--section-padding)] bg-[color:color-mix(in_srgb,var(--color-surface)_40%,transparent)]">
      <div className="section-container">
        <SectionHeader
          number="02. Habilidades"
          title="Stack Tecnológico"
          subtitle="Herramientas y tecnologías que utilizo en análisis de datos y desarrollo full stack."
          centered
        />

        {error ? (
          <p className="text-center text-[var(--color-text-muted)]">Error cargando habilidades.</p>
        ) : skills.length === 0 ? (
          <p className="text-center text-[var(--color-text-muted)]">Pronto agregaré mis habilidades.</p>
        ) : (
          <>
            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    activeCategory === cat
                      ? 'bg-brand text-white shadow-[0_0_16px_rgba(37,99,235,0.35)]'
                      : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-brand/40 hover:text-brand'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map(skill => (
                <Card key={skill.id} className="p-5 flex flex-col items-center text-center gap-3">
                  <TechIcon name={skill.name} src={skill.icon} className="w-10 h-10 text-brand" />
                  <div>
                    <p className="font-medium text-sm text-[var(--color-text)]">{skill.name}</p>
                    <p className="text-xs text-[var(--color-text-subtle)] mt-0.5">
                      {skill.years_experience} {skill.years_experience === 1 ? 'año' : 'años'}
                    </p>
                  </div>
                  {/* Proficiency bar */}
                  <div className="w-full h-1 rounded-full bg-[var(--color-surface-3)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand to-indigo-400 transition-all duration-700"
                      style={{ width: `${Math.min(100, (skill.years_experience / 5) * 100)}%` }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
