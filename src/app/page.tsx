import type { Metadata } from 'next';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ContactSection from '../components/sections/ContactSection';
import { getPortfolioData } from '../lib/portfolioData';
import { normalizeUrl } from '../lib/utils';
import { SITE_ROLE, SITE_URL } from '../lib/site';

// La página se genera en el servidor y se cachea 5 minutos (ISR): el HTML
// llega con todo el contenido y los cambios del admin aparecen en ese plazo.
export const revalidate = 300;

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default async function Home() {
  const data = await getPortfolioData();

  // Datos estructurados para que Google entienda quién eres (schema.org/Person).
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.info.name,
    jobTitle: SITE_ROLE,
    description: data.info.description,
    url: SITE_URL,
    email: data.info.email ? `mailto:${data.info.email}` : undefined,
    address: data.info.location
      ? { '@type': 'PostalAddress', addressLocality: data.info.location }
      : undefined,
    sameAs: data.socialMedia
      .map((s) => normalizeUrl(s.url))
      .filter((url) => /^https?:\/\/(www\.)?(linkedin|github)\.com\//i.test(url)),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // "<" escapado para que el contenido no pueda cerrar la etiqueta <script>.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
      />
      <HeroSection info={data.info} socialMedia={data.socialMedia} />
      <AboutSection info={data.info} />
      <SkillsSection skills={data.skills} error={data.errors.skills} />
      <ProjectsSection projects={data.projects} />
      <CertificationsSection certifications={data.certifications} error={data.errors.certifications} />
      <ContactSection info={data.info} socialMedia={data.socialMedia} />
    </>
  );
}
