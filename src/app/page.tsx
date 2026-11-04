import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ContactSection from '../components/sections/ContactSection';
import { getPortfolioData } from '../lib/portfolioData';

// La página se genera en el servidor y se cachea 5 minutos (ISR): el HTML
// llega con todo el contenido y los cambios del admin aparecen en ese plazo.
export const revalidate = 300;

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <>
      <HeroSection info={data.info} socialMedia={data.socialMedia} />
      <AboutSection info={data.info} />
      <SkillsSection skills={data.skills} error={data.errors.skills} />
      <ProjectsSection projects={data.projects} />
      <CertificationsSection certifications={data.certifications} error={data.errors.certifications} />
      <ContactSection info={data.info} socialMedia={data.socialMedia} />
    </>
  );
}
