import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Providers } from './providers';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | audiophile',
  description: 'Get the best audio devices for your listening',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
