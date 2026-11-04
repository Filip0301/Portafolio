import Script from 'next/script';

// Google Analytics 4 con el ID de medición de Firebase. Antes se cargaba vía
// firebase/analytics, pero la CSP lo bloqueaba y nunca registró visitas.
// Para desactivarlo, quita NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID de Vercel.
const GA_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

export default function Analytics() {
  if (!GA_ID || !/^G-[A-Z0-9]+$/.test(GA_ID)) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
