import { JsonLd } from './JsonLd';

interface ArticleJsonLdProps {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  url: string;
  image?: string;
}

export function ArticleJsonLd({
  title,
  description,
  publishedAt,
  updatedAt,
  authorName,
  url,
  image,
}: ArticleJsonLdProps) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt,
    url,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'LandlordReady',
    },
  };

  if (image) {
    data.image = image;
  }

  return <JsonLd data={data} />;
}
