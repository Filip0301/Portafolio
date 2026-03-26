import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Felipe Zúñiga | Data Analyst & Full Stack Developer',
  description:
    'Portafolio de Felipe Zúñiga — Ingeniero en Informática especializado en análisis de datos, BI y desarrollo web full stack.',
  keywords: ['data analyst', 'full stack developer', 'React', 'Next.js', 'Python', 'SQL', 'Chile'],
  authors: [{ name: 'Felipe Zúñiga' }],
  openGraph: {
    title: 'Felipe Zúñiga | Data Analyst & Full Stack Developer',
    description: 'Portafolio de Felipe Zúñiga — Data Analyst & Full Stack Developer',
    type: 'website',
    locale: 'es_CL',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
    >
      <body className="relative bg-[var(--color-bg)] text-[var(--color-text)]" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}