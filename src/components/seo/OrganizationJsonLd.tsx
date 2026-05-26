import { JsonLd } from './JsonLd';

export function OrganizationJsonLd() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LandlordReady',
    url: 'https://www.landlord-ready.com',
    logo: 'https://www.landlord-ready.com/images/logos/logo-full-light.png',
    description: 'Compliance tracking for private landlords in England',
  };

  return <JsonLd data={data} />;
}
