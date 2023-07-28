'use client';
import { useRouter } from 'next/navigation';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import ProductCard from '@/components/product-card';
import { Box, Container, VStack } from '@/utils/chakra-components';

const HeadphoneDetail = () => {
  const router = useRouter();

  return (
    <>
      <Box as="main">
        <Container maxW="container.lg" px="0" pb="160px" pt="79px">
          <Box
            as="button"
            color="aph.black.900"
            opacity="0.5"
            fontSize="md"
            fontWeight="medium"
            lineHeight="25px"
            _hover={{
              color: 'aph.primary.100',
              transition: 'color .4s ease-out',
            }}
            onClick={() => router.back()}
          >
            Go Back
          </Box>
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
