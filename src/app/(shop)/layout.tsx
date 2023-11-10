import '../globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/nav';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Category | audiophile',
  description: 'Get the best audio devices for your listening',
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar bgColor="aph.black.900" />
      {children}
      <Footer />
    </>
  );
}
