import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_ROLE } from '../lib/site';

// Imagen que aparece al compartir el enlace en LinkedIn, WhatsApp, X, etc.
export const alt = `${SITE_NAME} — ${SITE_ROLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #111827 60%, #1e3a8a 100%)',
          color: '#f1f5f9',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: '#60a5fa', letterSpacing: 4, textTransform: 'uppercase' }}>
          Portafolio
        </div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, lineHeight: 1.1, marginTop: 24 }}>
          {SITE_NAME}
        </div>
        <div style={{ display: 'flex', fontSize: 40, color: '#cbd5e1', marginTop: 32 }}>
          {SITE_ROLE}
        </div>
        <div style={{ display: 'flex', width: 120, height: 8, borderRadius: 4, background: '#2563EB', marginTop: 48 }} />
      </div>
    ),
    size
  );
}
