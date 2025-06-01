import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Felipe Zuñiga | Portafolio',
  description: 'Portafolio personal de Felipe Zuñiga - Desarrollador Full Stack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:via-[#0a0a0a] dark:to-[#121212]">
            <main className="relative z-10">
              {children}
              <ThemeToggle />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
} 