import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Callout } from '@/components/mdx/Callout';
import { KeyDate } from '@/components/mdx/KeyDate';
import { StepList, Step } from '@/components/mdx/StepList';
import { PullQuote } from '@/components/mdx/PullQuote';
import { InlineCTA } from '@/components/mdx/InlineCTA';
import { InlineNewsletter } from '@/components/mdx/InlineNewsletter';
import { LegalBlock } from '@/components/mdx/LegalBlock';
import { FAQAccordion, FAQItem } from '@/components/mdx/FAQAccordion';

const mdxComponents = {
  Callout,
  KeyDate,
  StepList,
  Step,
  PullQuote,
  InlineCTA,
  InlineNewsletter,
  LegalBlock,
  FAQAccordion,
  FAQItem,
};

export async function compileMDXContent(source: string) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
      },
    },
  });

  return content;
}
