import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };
export const alt = 'LandlordReady — compliance tracking for private landlords';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          backgroundColor: '#1A3D2B',
          color: '#F5F0E8',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: '#C97D10',
            marginBottom: 24,
          }}
        >
          Renters&apos; Rights Act 2025
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: '90%',
          }}
        >
          Stay compliant. Without the stress.
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            gap: 16,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: '#F5F0E8' }}>
            LandlordReady
          </div>
          <div style={{ fontSize: 18, color: '#F5F0E8', opacity: 0.7 }}>
            — Compliance tracking for private landlords
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
