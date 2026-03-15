import { getAllPosts } from '@/lib/content';

const BASE_URL = 'https://www.landlord-ready.com';

export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <link>${BASE_URL}/blog/${post.frontmatter.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.frontmatter.slug}</guid>
      <description><![CDATA[${post.frontmatter.excerpt}]]></description>
      <pubDate>${new Date(post.frontmatter.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LandlordReady Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Guides, news, and compliance updates for private landlords in England and Wales.</description>
    <language>en-gb</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
