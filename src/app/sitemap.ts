import type { MetadataRoute } from 'next';
import { getAllPosts, getAllTags } from '@/lib/content';
import { getAllCategories } from '@/lib/categories';
import { features } from '@/lib/features';

const BASE_URL = 'https://www.landlord-ready.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0, lastModified: now },
    { url: `${BASE_URL}/pricing`, changeFrequency: 'monthly', priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/features`, changeFrequency: 'monthly', priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3, lastModified: now },
    { url: `${BASE_URL}/cookies`, changeFrequency: 'yearly', priority: 0.3, lastModified: now },
  ];

  const featurePages: MetadataRoute.Sitemap = features.map((feature) => ({
    url: `${BASE_URL}/features/${feature.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
    lastModified: now,
  }));

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.frontmatter.slug}`,
    lastModified: post.frontmatter.updatedAt ?? post.frontmatter.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const categoryPages: MetadataRoute.Sitemap = getAllCategories().map((category) => ({
    url: `${BASE_URL}/blog/category/${category.slug}`,
    changeFrequency: 'weekly',
    priority: 0.6,
    lastModified: now,
  }));

  const tagPages: MetadataRoute.Sitemap = getAllTags().map((tag) => ({
    url: `${BASE_URL}/blog/tag/${tag}`,
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  return [...staticPages, ...featurePages, ...postPages, ...categoryPages, ...tagPages];
}
