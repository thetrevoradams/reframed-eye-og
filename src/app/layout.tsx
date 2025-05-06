import type { Metadata } from 'next';
import './globals.css';
import { manrope, marcellus } from './fonts';
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Reframed Eye Optometry',
  description:
    'Comprehensive eye care services at Reframed Eye, a new optometry practice coming soon to Idaho Falls, Idaho. Glasses, contacts, eye exams, low vision evaluations and more! Schedule online or call 208-557-3222.',
  openGraph: {
    type: 'website',
    url: 'https://reframedeye.com',
    title: 'Reframed Eye Optometry',
    description:
      'Comprehensive eye care services at Reframed Eye, a new optometry practice coming soon to Idaho Falls, Idaho. Glasses, contacts, eye exams, low vision evaluations and more! Schedule online or call 208-557-3222.',
    images: 'https://reframedeye.com/logo.png',
  },
};

const GTM_ID = 'G-FTV8KZ9BMV';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${manrope.variable}`}>
        <GoogleTagManager gtmId={GTM_ID} />
        <Script id="gtm" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', ${GTM_ID});
          `}
        </Script>
        <Script id="localBusinessData" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Optometrist',
            name: 'Reframed Eye Optometry',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '3508 S 25th E',
              addressLocality: 'Idaho Falls',
              addressRegion: 'ID',
              postalCode: '84331',
              addressCountry: 'US',
            },
            url: 'https://reframedeye.com/',
            telephone: '+12085573222',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                opens: '08:00',
                closes: '17:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Friday'],
                opens: '08:00',
                closes: '16:30',
              },
            ],
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
