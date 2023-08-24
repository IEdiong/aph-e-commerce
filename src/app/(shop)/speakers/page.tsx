import type { Metadata } from 'next';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import ProductCard from '@/components/product-card';
import { Box, Container, Heading, VStack } from '@/utils/chakra-components';

export const metadata: Metadata = {
  title: 'Speakers | audiophile',
  description: 'Get the best audio devices for your listening',
};

const SpeakersPage = () => {
  return (
    <>
      <Box as="header" bgColor="aph.black.900" py="98px" textAlign="center">
        <Heading as="h1" variant="h2" color="aph.white">
          Speakers
        </Heading>
      </Box>
      <Box as="main">
        <Container maxW="container.lg" px="0" py="160px">
          <VStack spacing={{ lg: '160px' }} align="stretch">
            <ProductCard
              productImageUrl="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
              productName="ZX9
              SPEAKER"
              summaryDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
              isNew={true}
              ctaLink={'/speakers/6'}
            />
            <ProductCard
              productImageUrl="/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
              productName="ZX7
              SPEAKER"
              summaryDescription="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
              direction="right-to-left"
              ctaLink={'/speakers/5'}
            />
            <FeatureProducts />
            <InfoSection />
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default SpeakersPage;
