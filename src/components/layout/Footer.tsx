import React from 'react';
import { normalizeUrl } from '../../lib/utils';
import { SITE_NAME } from '../../lib/site';
import type { SocialMedia } from '../../types/portfolio';

// Solo se usan si Firestore no devuelve redes sociales.
const FALLBACK_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/Filip0301' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/felipe-ismael-zuñiga-torres-239272252' },
];

export default function Footer({ socialMedia }: { socialMedia: SocialMedia[] }) {
  const year = new Date().getFullYear();

  const firestoreLinks = socialMedia.map((s) => ({ label: s.platform, href: normalizeUrl(s.url) }));
  const links = firestoreLinks.length > 0 ? firestoreLinks : FALLBACK_LINKS;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-subtle)]">
          {`© ${year} ${SITE_NAME} — Diseñado & desarrollado con Next.js`}
        </p>
        <div className="flex items-center gap-6">
          {links.map(({ label, href }) => (
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
