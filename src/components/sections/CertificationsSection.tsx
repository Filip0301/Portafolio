import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { normalizeUrl } from '../../lib/utils';
import { FaExternalLinkAlt } from 'react-icons/fa';
import type { Certification } from '../../types/portfolio';

const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'];

/**
 * "2024-09-01" → "sept 2024". Se lee la fecha tal cual está guardada: con
 * new Date("2024-09-01") se interpreta en UTC y en Chile queda en agosto.
 * Los meses van fijos para que servidor y navegador muestren lo mismo.
 */
function formatIssueDate(value: string | undefined): string {
  const match = /^(\d{4})-(\d{2})/.exec(value ?? '');
  if (!match) return value ?? '';
  const month = MONTHS[Number(match[2]) - 1];
  return month ? `${month} ${match[1]}` : value ?? '';
}

interface CertificationsSectionProps {
  certifications: Certification[];
  error?: boolean;
}

export default function CertificationsSection({ certifications, error = false }: CertificationsSectionProps) {

  return (
    <section id="certifications" className="py-[var(--section-padding)] bg-[color:color-mix(in_srgb,var(--color-surface)_40%,transparent)]">
      <div className="section-container">
        <SectionHeader
          number="04. Certificaciones"
          title="Credenciales"
          subtitle="Certificaciones y cursos que respaldan mis habilidades técnicas."
          centered
        />

        {error ? (
          <p className="text-center text-[var(--color-text-muted)]">Error cargando certificaciones.</p>
        ) : certifications.length === 0 ? (
          <div className="text-center py-16 text-[var(--color-text-muted)]">
            <div className="text-4xl mb-3">🏅</div>
            <p>Certificaciones en camino — ¡Muy pronto!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map(cert => (
              <Card key={cert.id} className="overflow-hidden flex flex-col">
                {/* Certificate image */}
                {cert.image_url && (
                  <div className="h-40 bg-[var(--color-surface-2)] overflow-hidden">
                    <img
                      src={cert.image_url}
                      alt={cert.name}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="p-5 flex flex-col gap-3 flex-1">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-brand tracking-wider uppercase">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-[var(--color-text-subtle)]">
                        {formatIssueDate(cert.issue_date)}
                      </span>
                    </div>
                    <h3 className="font-medium text-sm text-[var(--color-text)] leading-snug">
                      {cert.name}
                    </h3>
                  </div>

                  {cert.description && (
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  {cert.credential_id && (
                    <p className="text-xs text-[var(--color-text-subtle)] font-mono">
                      ID: {cert.credential_id}
                    </p>
                  )}

                  {/* Credential link */}
                  {cert.credential_url && (
                    <div className="mt-auto pt-2">
                      {/* En pestaña nueva: Credly, Skillshop, etc. no permiten mostrarse dentro de un iframe */}
                      <a
                        href={normalizeUrl(cert.credential_url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-brand hover:text-brand-400 transition-colors font-medium"
                      >
                        Ver credencial
                        <span className="sr-only">de {cert.name} (se abre en una pestaña nueva)</span>
                        <FaExternalLinkAlt size={10} aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
