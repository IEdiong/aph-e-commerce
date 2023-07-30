import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import ProductCard from '@/components/product-card';
import { Box, Container, Heading, VStack } from '@/utils/chakra-components';

const EarphonesPage = () => {
  return (
    <>
      <Box as="header" bgColor="aph.black.900" py="98px" textAlign="center">
        <Heading as="h1" variant="h2" color="aph.white">
          Earphones
        </Heading>
      </Box>
      <Box as="main">
        <Container maxW="container.lg" px="0" py="160px">
          <VStack spacing={{ lg: '160px' }} align="stretch">
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
