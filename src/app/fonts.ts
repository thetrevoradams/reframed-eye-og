import { Marcellus, Manrope } from 'next/font/google';

export const marcellus = Marcellus({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-marcellus',
});

export const manrope = Manrope({
  weight: ['300', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-manrope',
});
