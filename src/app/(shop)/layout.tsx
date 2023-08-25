import '../globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Providers } from '../providers';
import NavBar from '@/components/nav';
import Footer from '@/components/footer';

const manrope = Manrope({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Category | audiophile',
  description: 'Get the best audio devices for your listening',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>
          <NavBar bgColor="aph.black.900" />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
