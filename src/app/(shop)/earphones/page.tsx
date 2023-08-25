import type { Metadata } from 'next';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import ProductCard from '@/components/product-card';
import { Box, Container, Heading, VStack } from '@/utils/chakra-components';

export const metadata: Metadata = {
  title: 'Earphones | audiophile',
  description: 'Get the best audio devices for your listening',
};

const EarphonesPage = () => {
  return (
    <>
      <Box
        as="header"
        bgColor="aph.black.900"
        pt={{ base: '32px', md: '105px', lg: '98px' }}
        pb={{ base: '32px', md: '97px' }}
        textAlign="center"
      >
        <Heading
          as="h1"
          variant={{ base: 'h2-sm', md: 'h2' }}
          color="aph.white"
        >
          Earphones
        </Heading>
      </Box>
      <Box as="main">
        <Container
          pt={{ base: '64px', md: '120px', lg: '160px' }}
          pb={{ base: '120px', lg: '160px' }}
        >
          <VStack spacing={{ base: '120px', lg: '160px' }} align="stretch">
            <ProductCard
              productImageUrl="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
              productName="YX1 WIRELESS
              EARPHONES"
              summaryDescription="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
              isNew={true}
              ctaLink={'/earphones/1'}
            />
            <FeatureProducts />
            <InfoSection />
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default EarphonesPage;
