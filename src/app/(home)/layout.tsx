import '../globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Providers } from '../providers';
import NavBar from '@/components/nav';
import { Box, Container, Heading, Text } from '@/utils/chakra-components';
import Cta from '@/components/cta';

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
            bgImage={"url('/assets/home/desktop/image-hero.jpg')"}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgPos={'top 0px right 30%'}
            h="729px"
          >
            <NavBar />
            <Container
              as="header"
              maxW="container.lg"
              px="0"
              pt="128px"
              pb="158px"
            >
              <Box w="430px" color="aph.white">
                <Text variant="overline" color="aph.white" opacity="0.5">
                  New product
                </Text>
                <Heading as="h1" variant="h1" my="6">
                  XX99 Mark II Headphones
                </Heading>
                <Text w="349px" opacity="0.75">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </Text>
                <Cta to="/headphones/4" variant="solid" w="160px" mt="40px">
                  See Product
                </Cta>
              </Box>
            </Container>
          </Box>
          {children}
        </Providers>
      </body>
    </html>
  );
}
