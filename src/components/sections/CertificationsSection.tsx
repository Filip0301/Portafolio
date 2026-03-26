'use client';

import React, { useState } from 'react';
import { useCertifications } from '../../hooks/useCertifications';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

export default function CertificationsSection() {
  const { certifications, loading, error } = useCertifications();
  const [selectedCertUrl, setSelectedCertUrl] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-[var(--section-padding)] bg-[var(--color-surface)]/40">
      <div className="section-container">
        <SectionHeader
          number="04. Certificaciones"
          title="Credenciales"
          subtitle="Certificaciones y cursos que respaldan mis habilidades técnicas."
          centered
        />

        {loading ? (
          <div className="flex justify-center py-16">
            <LoadingSpinner size="lg" />
          </div>
        ) : error ? (
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
                        {new Date(cert.issue_date).toLocaleDateString('es-CL', { year: 'numeric', month: 'short' })}
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
                      <button
                        onClick={() => setSelectedCertUrl(cert.credential_url!)}
                        className="inline-flex items-center gap-2 text-xs text-brand hover:text-brand-400 transition-colors font-medium"
                      >
                        Ver credencial
                        <FaExternalLinkAlt size={10} />
                      </button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {selectedCertUrl && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedCertUrl(null)}>
            <div className="relative max-w-4xl w-full h-[85vh] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-2 shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <button
                 onClick={() => setSelectedCertUrl(null)}
                 className="absolute top-4 right-6 z-10 bg-black/60 text-white p-2.5 rounded-full hover:bg-brand transition-colors"
                 aria-label="Cerrar modal"
              >
                <FaTimes size={16} />
              </button>
              <iframe 
                 src={selectedCertUrl} 
                 className="w-full h-full rounded-xl bg-white" 
                 title="Certificado Digital"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
