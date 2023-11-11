import './globals.css';
import { Manrope } from 'next/font/google';
import { Providers } from './providers';
import NextTopLoader from 'nextjs-toploader';

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <NextTopLoader color="#D87D4A" showSpinner={false} height={4} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
