'use client';

import React from 'react';
import { usePersonalInfo } from '../../hooks/usePersonalInfo';
import SectionHeader from '../ui/SectionHeader';
import LoadingSpinner from '../ui/LoadingSpinner';
import { PersonalInfo, SocialMedia } from '../../types/portfolio';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  getValue: (data: PersonalInfo) => string | undefined;
  getHref: (data: PersonalInfo) => string | undefined;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    getValue: (d) => d.email,
    getHref:  (d) => `mailto:${d.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Teléfono',
    getValue: (d) => d.phone,
    getHref:  (d) => `tel:${d.phone}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Ubicación',
    getValue: (d) => d.location,
    getHref:  () => undefined,
  },
];

export default function ContactSection() {
  const { data, socialMedia, loading } = usePersonalInfo();

  return (
    <section id="contact" className="py-[var(--section-padding)]">
      <div className="section-container">
        <div className="max-w-2xl">
          <SectionHeader
            number="05. Contacto"
            title="Trabajemos juntos"
            subtitle="¿Tienes un proyecto de datos o desarrollo web en mente? Hablemos."
          />

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="space-y-6">
              {/* Contact info */}
              <div className="space-y-4">
                {CONTACT_ITEMS.map(({ icon, label, getValue, getHref }) => {
                  const value = data ? getValue(data) : undefined;
                  const href  = data ? getHref(data)  : undefined;
                  if (!value) return null;
                  return (
                    <div key={label} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                        {icon}
                      </div>
                      <div>
                        <p className="text-xs text-[var(--color-text-subtle)] uppercase tracking-wider mb-0.5">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-[var(--color-text)] hover:text-brand transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-[var(--color-text)]">{value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CV download */}
              <div className="pt-2">
                <a
                  href="/Documents/CV_Felipe_Zuniga.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-600 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar CV
                </a>
              </div>

              {/* Social media */}
              {socialMedia.filter(s => s.isActive).length > 0 && (
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-xs text-[var(--color-text-subtle)] uppercase tracking-wider mb-3">
                    Redes Sociales
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {socialMedia.filter(s => s.isActive).map((social, i) => (
                      <a
                        key={social.id ?? i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-muted)] hover:border-brand/40 hover:text-brand transition-all duration-150"
                      >
                        {social.icon && (
                          <img src={social.icon} alt="" className="w-4 h-4 object-contain" />
                        )}
                        {social.platform}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
