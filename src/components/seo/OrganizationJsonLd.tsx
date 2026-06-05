import { JsonLd } from './JsonLd';

const SITE_URL = 'https://www.landlord-ready.com';

export function OrganizationJsonLd() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'LandlordReady',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logos/logo-full-light.png`,
      width: 1180,
      height: 248,
    },
    description: 'Compliance tracking for private landlords in England',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    // TODO: add `sameAs` (real social profile URLs) and `contactPoint`
    // (support email) once confirmed — do not point at non-existent profiles.
  };

  return <JsonLd data={data} />;
}
