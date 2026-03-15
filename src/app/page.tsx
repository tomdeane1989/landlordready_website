import Link from 'next/link';
import { getRecentPosts } from '@/lib/content';

function CountdownDays() {
  const deadline = new Date('2026-05-01');
  const now = new Date();
  const days = Math.max(0, Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  if (days <= 0) return <span>The deadline has passed</span>;
  return <span>{days} days until Phase 1 takes effect</span>;
}

export default function HomePage() {
  const recentPosts = getRecentPosts(3);

  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ backgroundColor: 'var(--color-forest-green)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-sm font-medium mb-4 tracking-wide uppercase"
            style={{ color: 'var(--color-amber)' }}
          >
            <CountdownDays />
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-parchment)',
            }}
          >
            The Renters&apos; Rights Act is coming.
            <br />
            Are you ready?
          </h1>
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--color-pale-green)' }}
          >
            LandlordReady helps private landlords track every obligation, deadline,
            and certificate — so nothing slips through the cracks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg no-underline transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-amber)',
                color: 'var(--color-near-black)',
              }}
            >
              Get compliant — free for 30 days
            </Link>
            <Link
              href="/features"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-lg no-underline border-2 transition-opacity hover:opacity-80"
              style={{
                borderColor: 'var(--color-parchment)',
                color: 'var(--color-parchment)',
              }}
            >
              See how it works
            </Link>
          </div>
          <p className="mt-4 text-sm" style={{ color: 'var(--color-pale-green)', opacity: 0.7 }}>
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Problem cards */}
      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: 'var(--color-pale-amber)' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest-green)' }}
          >
            The law is changing. Most landlords aren&apos;t prepared.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'New obligations landing fast',
                description:
                  "The Renters' Rights Act introduces mandatory periodic tenancies, reformed possession grounds, and Awaab's Law for the private sector. Phase 1 takes effect 1 May 2026.",
              },
              {
                title: 'Penalties are getting serious',
                description:
                  'Fines of up to £7,000 for a first offence and £40,000 for repeat breaches. Local authorities will have stronger enforcement powers than ever before.',
              },
              {
                title: 'No clear guide for small landlords',
                description:
                  "If you manage 1-2 properties, you probably don't have a compliance team. You need a simple way to know exactly what's required and when.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--color-parchment)' }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--color-forest-green)' }}
                >
                  {card.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--color-near-black)' }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature summary */}
      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: 'var(--color-parchment)' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest-green)' }}
          >
            10-minute compliance. Every week.
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto" style={{ color: 'var(--color-near-black)' }}>
            LandlordReady keeps track of your obligations so you don&apos;t have to.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Obligation tracker',
                description:
                  'See every legal requirement for your properties in one dashboard. Gas safety, EPC, electrical checks, tenancy deposits — all tracked automatically.',
              },
              {
                title: 'Deadline alerts',
                description:
                  'Get reminded before certificates expire or deadlines pass. Never miss a renewal date or compliance window again.',
              },
              {
                title: 'Regulation updates',
                description:
                  "When the law changes, your dashboard updates. We translate complex legislation into clear, actionable tasks for your properties.",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-pale-green)' }}
                >
                  <span style={{ color: 'var(--color-forest-green)', fontSize: '1.5rem' }}>✓</span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: 'var(--color-forest-green)' }}
                >
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--color-near-black)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: 'var(--color-pale-green)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest-green)' }}
          >
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Add your property', description: 'Enter your property details and current certificates. Takes about 5 minutes.' },
              { step: '2', title: 'See your obligations', description: 'Your personalised compliance dashboard shows exactly what you need to do and when.' },
              { step: '3', title: 'Stay compliant', description: 'Get alerts before deadlines. When the law changes, your tasks update automatically.' },
            ].map((item) => (
              <div key={item.step}>
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold"
                  style={{
                    backgroundColor: 'var(--color-forest-green)',
                    color: 'var(--color-parchment)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: 'var(--color-forest-green)' }}
                >
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-near-black)' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest blog posts */}
      {recentPosts.length > 0 && (
        <section className="py-16 md:py-20 px-6" style={{ backgroundColor: 'var(--color-parchment)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest-green)' }}
              >
                Latest from the blog
              </h2>
              <Link
                href="/blog"
                className="font-semibold no-underline hidden md:inline-block"
                style={{ color: 'var(--color-forest-green)' }}
              >
                View all articles →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.frontmatter.slug}
                  href={`/blog/${post.frontmatter.slug}`}
                  className="block rounded-lg p-6 no-underline transition-shadow hover:shadow-md"
                  style={{ backgroundColor: 'white' }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: 'var(--color-amber)' }}
                  >
                    {post.frontmatter.category.replace(/-/g, ' ')}
                  </p>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-forest-green)',
                    }}
                  >
                    {post.frontmatter.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{
                      color: 'var(--color-near-black)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.frontmatter.excerpt}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-amber)' }}>
                    {post.readingTime}
                  </p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 md:hidden">
              <Link
                href="/blog"
                className="font-semibold no-underline"
                style={{ color: 'var(--color-forest-green)' }}
              >
                View all articles →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Pricing preview */}
      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: 'var(--color-pale-green)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-forest-green)' }}
          >
            Simple, transparent pricing
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-near-black)' }}>
            Start free for 30 days. Plans from £9/month.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg no-underline transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-forest-green)',
              color: 'var(--color-parchment)',
            }}
          >
            View pricing
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ backgroundColor: 'var(--color-forest-green)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-parchment)',
            }}
          >
            You&apos;ve got time — let&apos;s sort it.
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--color-pale-green)' }}>
            Phase 1 of the Renters&apos; Rights Act takes effect on 1 May 2026.
            Get your properties compliant before the deadline.
          </p>
          <Link
            href="#"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-lg no-underline transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--color-amber)',
              color: 'var(--color-near-black)',
            }}
          >
            Get compliant — free for 30 days
          </Link>
          <p className="mt-4 text-sm" style={{ color: 'var(--color-pale-green)', opacity: 0.7 }}>
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
