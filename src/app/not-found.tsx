import Link from 'next/link';

export const metadata = {
  title: 'Página no encontrada',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-24 pb-16">
      <div className="section-container text-center">
        <p className="font-mono text-sm text-brand font-medium tracking-widest uppercase mb-3">Error 404</p>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-[var(--color-text)] mb-4">
          Esta página no existe
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-md mx-auto mb-8">
          Puede que el enlace esté mal escrito o que la página se haya movido.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-600 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
