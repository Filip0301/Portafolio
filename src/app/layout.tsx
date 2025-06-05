import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeToggle from '../components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Felipe Zuñiga | Ingeniero en Informática',
  description: 'Portafolio profesional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        {/* Fondo fijo con gradiente */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black transition-colors duration-200" />
        
        {/* Theme Toggle siempre visible */}
        <ThemeToggle />
        
        {/* Contenido principal */}

            {children}

      </body>
    </html>
  )
} 