import { Suspense } from 'react';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import ProductCard from '@/components/product-card';
import { Box, Container, Flex, VStack } from '@/utils/chakra-components';
import NavigateBack from '@/components/navigate-back';
import Features from '@/components/features';
import InTheBox from '@/components/in-the-box';
import MoreProducts from '@/components/more-products';
import Gallery from '@/components/gallery';

const EarphoneDetail = () => {
  return (
    <Box as="main">
      <Container maxW="container.lg" px="0" pb="160px" pt="79px">
        <Suspense fallback={null}>
          <NavigateBack />
        </Suspense>
        <VStack mt="56px" spacing="160px" align="stretch">
          <ProductCard
            productImageUrl="/assets/product-yx1-earphones/desktop/image-product.jpg"
            productName="YX1 WIRELESS
            EARPHONES"
            summaryDescription="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
            productPrice={599}
            canAddToCart={true}
            isNew={true}
            ctaText={'Add to cart'}
          />
          <Flex justify="flex-start" columnGap="125px">
            <Features />
            <InTheBox />
          </Flex>
          <Gallery
            imgOne="/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
            imgTwo="/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
            imgThree="/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
          />
          <MoreProducts />
          <FeatureProducts />
          <InfoSection />
        </VStack>
      </Container>
    </Box>
  );
};

export default EarphoneDetail;
