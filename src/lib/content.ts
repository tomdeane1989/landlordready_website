import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'content');
const blogDirectory = path.join(contentDirectory, 'blog');

export interface PostFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: string;
  readingTimeMinutes: number;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    frontmatter: data as PostFrontmatter,
    content,
    readingTime: stats.text,
    readingTimeMinutes: Math.ceil(stats.minutes),
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
    );
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.frontmatter.category === category);
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => post.frontmatter.tags.includes(tag));
}

export function getFeaturedPost(): Post | undefined {
  return getAllPosts().find((post) => post.frontmatter.featured);
}

export function getRecentPosts(count: number = 3): Post[] {
  return getAllPosts().slice(0, count);
}

export function getRelatedPosts(currentSlug: string, category: string, count: number = 3): Post[] {
  return getAllPosts()
    .filter(
      (post) =>
        post.frontmatter.slug !== currentSlug &&
        post.frontmatter.category === category
    )
    .slice(0, count);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => post.frontmatter.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export function paginatePosts(
  posts: Post[],
  page: number,
  perPage: number = 6
): { posts: Post[]; totalPages: number; currentPage: number } {
  const totalPages = Math.ceil(posts.length / perPage);
  const start = (page - 1) * perPage;
  return {
    posts: posts.slice(start, start + perPage),
    totalPages,
    currentPage: page,
  };
}
