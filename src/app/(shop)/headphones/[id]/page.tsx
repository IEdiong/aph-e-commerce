import { Suspense } from 'react';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import ProductCard from '@/components/product-card';
import { Box, Container, VStack } from '@/utils/chakra-components';
import NavigateBack from '@/components/navigate-back';

const HeadphoneDetail = () => {
  return (
    <>
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
            <FeatureProducts />
            <InfoSection />
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default HeadphoneDetail;
