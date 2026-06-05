import { getAllPosts } from './content';

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: 'renters-rights-act',
    name: "Renters' Rights Act",
    description: "Everything landlords need to know about the Renters' Rights Act 2025 and its phased implementation.",
  },
  {
    slug: 'safety-certificates',
    name: 'Safety Certificates',
    description: 'Gas safety, electrical inspections, EPC ratings, and other mandatory safety compliance for rental properties.',
  },
  {
    slug: 'rent-increases',
    name: 'Rent Increases',
    description: 'How to lawfully increase rent under the new Section 13 rules and periodic tenancy regime.',
  },
  {
    slug: 'awaabs-law',
    name: "Awaab's Law",
    description: "How Awaab's Law applies to private landlords — damp, mould, and hazard response timelines.",
  },
  {
    slug: 'section-8',
    name: 'Section 8',
    description: 'Understanding the reformed Section 8 possession grounds and notice periods.',
  },
  {
    slug: 'landlord-guides',
    name: 'Landlord Guides',
    description: 'Practical step-by-step guides for private landlords managing 1-2 rental properties.',
  },
];

function humanise(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// Distinct category slugs actually used by published posts. Safe from import
// cycles because content.ts never imports categories.ts.
export function getUsedCategorySlugs(): string[] {
  return Array.from(new Set(getAllPosts().map((p) => p.frontmatter.category)));
}

// Reconciled superset: curated entries plus a synthesised entry for any slug a
// post uses that we haven't curated yet. Guarantees no published post can ever
// point at a 404 category page or be dropped from the sitemap, regardless of
// what category an agent emits.
export function getAllCategories(): Category[] {
  const bySlug = new Map(categories.map((c) => [c.slug, c]));
  for (const slug of getUsedCategorySlugs()) {
    if (!bySlug.has(slug)) {
      const name = humanise(slug);
      bySlug.set(slug, {
        slug,
        name,
        description: `Guides and updates for private landlords on ${name.toLowerCase()}.`,
      });
    }
  }
  return Array.from(bySlug.values());
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getAllCategories().find((cat) => cat.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getAllCategories().find((cat) => cat.slug === slug)?.name ?? humanise(slug);
}
