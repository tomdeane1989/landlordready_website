import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { features, getFeatureBySlug } from '@/lib/features';

export const revalidate = false;

export function generateStaticParams() {
  return features.map((feature) => ({
    feature: feature.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ feature: string }>;
}): Promise<Metadata> {
  const { feature: slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return { title: 'Feature Not Found' };
  }

  const title = feature.seoTitle ?? `${feature.name} — LandlordReady`;
  const description = feature.seoDescription ?? feature.description[0].slice(0, 160);

  return {
    title,
    description,
    alternates: {
      canonical: `/features/${feature.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/features/${feature.slug}`,
      type: 'website',
    },
  };
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const { feature: slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  return (
    <main className="bg-parchment">
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-5xl mx-auto px-6 pt-6 pb-2"
      >
        <ol className="flex items-center gap-2 text-sm font-body text-near-black/60">
          <li>
            <Link
              href="/"
              className="hover:text-forest-green transition-colors no-underline"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/features"
              className="hover:text-forest-green transition-colors no-underline"
            >
              Features
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            className="text-forest-green font-medium"
            aria-current="page"
          >
            {feature.name}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display text-forest-green">
            {feature.headline}
          </h1>
          <div className="space-y-5 text-left">
            {feature.description.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed font-body text-near-black"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-pale-green py-14 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-display text-forest-green">
            What you get
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {feature.benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-parchment rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 mt-0.5 text-forest-green"
                  >
                    <path
                      d="M7 12L10.5 15.5L17 8.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="font-body text-near-black font-medium">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-display text-forest-green">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {feature.howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-forest-green text-parchment font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-display text-forest-green">
                  {step.title}
                </h3>
                <p className="font-body text-near-black leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-green py-14 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-parchment">
            Start {feature.ctaAction}
          </h2>
          <p className="text-lg mb-8 text-pale-green">
            Try LandlordReady free for 7 days.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg no-underline transition-opacity hover:opacity-90 bg-amber text-near-black font-body"
          >
            Start your free trial
          </Link>
        </div>
      </section>

      {/* Back to features */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-forest-green font-semibold font-body no-underline hover:opacity-80 transition-opacity"
          >
            See all features
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
