import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/content';
import { categories } from '@/lib/categories';

const BASE_URL = 'https://www.landlordready.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/pricing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/features`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/newsletter`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.frontmatter.slug}`,
    lastModified: post.frontmatter.updatedAt ?? post.frontmatter.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/blog/category/${category.slug}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticPages, ...postPages, ...categoryPages];
}
