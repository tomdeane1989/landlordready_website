import { JsonLd } from './JsonLd';

const SITE_URL = 'https://www.landlord-ready.com';

interface ArticleJsonLdProps {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  url: string;
  image?: string;
  section?: string;
  wordCount?: number;
}

export function ArticleJsonLd({
  title,
  description,
  publishedAt,
  updatedAt,
  authorName,
  url,
  image,
  section,
  wordCount,
}: ArticleJsonLdProps) {
  // Editorial hero when the post has one, otherwise the dynamically generated
  // branded OG card for this post.
  const imageUrl = image
    ? image.startsWith('/')
      ? `${SITE_URL}${image}`
      : image
    : `${url}/opengraph-image`;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title.slice(0, 110),
    description,
    image: [imageUrl],
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    inLanguage: 'en-GB',
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'LandlordReady',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logos/logo-full-light.png`,
        width: 1180,
        height: 248,
      },
    },
    ...(section ? { articleSection: section } : {}),
    ...(typeof wordCount === 'number' ? { wordCount } : {}),
  };

  return <JsonLd data={data} />;
}
