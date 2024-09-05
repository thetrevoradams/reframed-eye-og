import type { Metadata } from 'next';
import './globals.css';
import { manrope, marcellus } from './fonts';

export const metadata: Metadata = {
  title: 'Reframed Eye Optometry',
  description:
    'Comprehensive eye care services at Reframed Eye, a new optometry practice coming soon to Idaho Falls, Idaho. From routine eye exams to specialized treatments, our experienced optometrists are dedicated to preserving your vision and eye health. Stay tuned for the grand opening and book your first appointment with our experienced team!',
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
