'use client';

import React from 'react';

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/macfelipe' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/felipezuniga' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-subtle)]">
          © {year} Felipe Zúñiga — Diseñado &amp; desarrollado con Next.js
        </p>
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-muted)] hover:text-brand transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
