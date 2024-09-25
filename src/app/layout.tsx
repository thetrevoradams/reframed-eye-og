import type { Metadata } from 'next';
import './globals.css';
import { manrope, marcellus } from './fonts';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
