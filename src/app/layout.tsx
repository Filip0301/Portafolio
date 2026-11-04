import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Analytics from '../components/Analytics';
import { getPortfolioData } from '../lib/portfolioData';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '../lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  keywords: ['data analyst', 'business intelligence', 'power bi', 'full stack developer', 'React', 'Next.js', 'Python', 'SQL', 'Chile'],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    type: 'website',
    locale: 'es_CL',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand focus:text-white"
        >
          Saltar al contenido
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="contenido">{children}</main>
          <Footer socialMedia={socialMedia} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}