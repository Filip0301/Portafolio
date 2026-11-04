import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Analytics from '../components/Analytics';
import { getPortfolioData } from '../lib/portfolioData';

export const metadata: Metadata = {
  title: 'Felipe Ismael Torres Ponce de León | Data Analyst & Full Stack Developer',
  description:
    'Portafolio de Felipe Ismael Torres Ponce de León — Ingeniero en Informática especializado en análisis de datos, BI y desarrollo web full stack.',
  keywords: ['data analyst', 'full stack developer', 'React', 'Next.js', 'Python', 'SQL', 'Chile'],
  authors: [{ name: 'Felipe Ismael Torres Ponce de León' }],
  openGraph: {
    title: 'Felipe Ismael Torres Ponce de León | Data Analyst & Full Stack Developer',
    description: 'Portafolio de Felipe Ismael Torres Ponce de León — Data Analyst & Full Stack Developer',
    type: 'website',
    locale: 'es_CL',
  },
  robots: { index: true, follow: true },
};

// Aplica el tema antes de pintar la página. Sin esto, quien prefiere modo
// oscuro ve un destello claro mientras carga React.
const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { socialMedia } = await getPortfolioData();

  return (
    <html
      lang="es"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="relative bg-[var(--color-bg)] text-[var(--color-text)]" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer socialMedia={socialMedia} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}