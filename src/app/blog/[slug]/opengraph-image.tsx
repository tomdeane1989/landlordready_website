import { ImageResponse } from 'next/og';
import { getPostBySlug, getPostSlugs } from '@/lib/content';

export const runtime = 'nodejs';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.frontmatter.title ?? 'LandlordReady';
  const category = post?.frontmatter.category?.replace(/-/g, ' ') ?? '';

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
        {category && (
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
            {category}
          </div>
        )}
        <div
          style={{
            fontSize: title.length > 60 ? 40 : 48,
            fontWeight: 700,
            lineHeight: 1.2,
            maxWidth: '90%',
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#F5F0E8',
            }}
          >
            LandlordReady
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#F5F0E8',
              opacity: 0.7,
            }}
          >
            — Compliance tracking for private landlords
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
