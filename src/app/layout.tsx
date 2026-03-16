import type { Metadata } from 'next';
import Script from 'next/script';
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd';
import './globals.css';

const GA_ID = 'G-54BMQ9PS3Q';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: {
    default: 'LandlordReady — Compliance Tracking for Private Landlords',
    template: '%s | LandlordReady',
  },
  description:
    "Stay compliant with the Renters' Rights Act 2025. LandlordReady helps private landlords track obligations, deadlines, and certificates — so nothing slips through the cracks.",
  metadataBase: new URL('https://www.landlord-ready.com'),
  icons: {
    icon: '/images/logos/icon-mark.png',
    apple: '/images/logos/icon-mark-light.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'LandlordReady',
    images: [
      {
        url: '/images/logos/logo-full-light.png',
        width: 1200,
        height: 630,
        alt: 'LandlordReady — 10-minute compliance. Every week.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/logos/logo-full-light.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
      >
        <SiteHeader />
        <OrganizationJsonLd />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
