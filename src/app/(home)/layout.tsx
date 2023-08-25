import '../globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Providers } from '../providers';
import NavBar from '@/components/nav';
import { Box, Container, Heading, Text } from '@/utils/chakra-components';
import Cta from '@/components/cta';
import Footer from '@/components/footer';

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
    <html lang="en">
      <body className={manrope.className}>
        <Providers>
          <Box
            bgImage={{
              base: "url('/assets/home/mobile/image-header.jpg')",
              md: "url('/assets/home/tablet/image-header.jpg')",
              lg: "url('/assets/home/desktop/image-hero.jpg')",
            }}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgPos={{
              base: 'center',
              md: 'center',
              lg: 'top 0px right 30%',
            }}
            h={{ base: '600px', md: '729px' }}
          >
            <NavBar />
            <Container
              as="header"
              pt={{ base: '108px', md: '128px' }}
              pb={{ lg: '158px' }}
            >
              <Box
                w={{ lg: '430px' }}
                color="aph.white"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                <Text variant="overline" color="aph.white" opacity="0.5">
                  New product
                </Text>
                <Heading
                  as="h1"
                  variant={{ base: 'h1-sm', md: 'h1' }}
                  my={{ base: '4', md: '6' }}
                >
                  XX99 Mark II Headphones
                </Heading>
                <Text
                  mx={{ base: 'auto', lg: '0' }}
                  maxW={{ base: '328px', md: '349px' }}
                  opacity="0.75"
                  mt={{ base: '2', md: '0' }}
                >
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </Text>
                <Cta
                  to="/headphones/4"
                  variant="solid"
                  w="160px"
                  mt={{ base: '28px', md: '40px' }}
                >
                  See Product
                </Cta>
              </Box>
            </Container>
          </Box>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
