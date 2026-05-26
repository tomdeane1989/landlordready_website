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

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getCategoryName(slug: string): string {
  return getCategoryBySlug(slug)?.name ?? slug;
}
