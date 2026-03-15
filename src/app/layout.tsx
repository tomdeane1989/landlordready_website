import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import './globals.css';

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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'LandlordReady',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
