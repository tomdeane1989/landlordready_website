import { JsonLd } from './JsonLd';

const SITE_URL = 'https://www.landlord-ready.com';

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'LandlordReady',
        url: SITE_URL,
        inLanguage: 'en-GB',
        description:
          "Compliance tracking for private landlords in England under the Renters' Rights Act 2025.",
        publisher: { '@id': `${SITE_URL}/#organization` },
        // TODO: add a SearchAction here once /blog supports a ?q= search query,
        // otherwise Google won't grant the sitelinks searchbox.
      }}
    />
  );
}
