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

const HeadphoneDetail = () => {
  return (
    <Box as="main">
      <Container maxW="container.lg" px="0" pb="160px" pt="79px">
        <Suspense fallback={null}>
          <NavigateBack />
        </Suspense>
        <VStack mt="56px" spacing="160px" align="stretch">
          <ProductCard
            productImageUrl="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
            productName="XX99 Mark II Headphones"
            summaryDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            productPrice={2999}
            canAddToCart={true}
            isNew={true}
          />
          <Flex justify="flex-start" columnGap="125px">
            <Features />
            <InTheBox />
          </Flex>
          <Gallery
            imgOne="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
            imgTwo="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
            imgThree="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
          />
          <MoreProducts />
          <FeatureProducts />
          <InfoSection />
        </VStack>
      </Container>
    </Box>
  );
};

export default HeadphoneDetail;
