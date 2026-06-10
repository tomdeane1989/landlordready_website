import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    // 301s consolidating cannibalising duplicate posts onto the ranking page.
    // Each loser's content was merged into its winner before the source MDX was deleted.
    return [
      {
        source: '/blog/landlord-registration-property-portal-explained',
        destination: '/blog/register-landlord-property-portal-guide',
        permanent: true,
      },
      {
        source: '/blog/damp-mould-landlord-guide-prevention-legal-duties',
        destination: '/blog/awaabs-law-private-landlords-damp-mould',
        permanent: true,
      },
      {
        source: '/blog/section-8-ground-6-redevelopment',
        destination: '/blog/section-8-grounds-renters-rights-act-complete-list',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
