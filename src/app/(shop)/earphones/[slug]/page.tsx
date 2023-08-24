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
import Data from '@/data/data.json';

const items = Data;

const EarphoneDetail = ({ params }: { params: { slug: string } }) => {
  const product = items[Number(params.slug) - 1];

  return (
    <Box as="main">
      <Container maxW="container.lg" px="0" pb="160px" pt="79px">
        <Suspense fallback={null}>
          <NavigateBack />
        </Suspense>
        <VStack mt="56px" spacing="160px" align="stretch">
          <ProductCard
            productImageUrl={product.image.desktop}
            productName={product.name}
            summaryDescription={product.description}
            productPrice={product.price}
            canAddToCart={true}
            isNew={product.new}
            ctaText={'Add to cart'}
          />
          <Flex justify="flex-start" columnGap="125px">
            <Features features={product.features} />
            <InTheBox includes={product.includes} />
          </Flex>
          <Gallery
            imgOne={product.gallery.first.desktop}
            imgTwo={product.gallery.second.desktop}
            imgThree={product.gallery.third.desktop}
          />
          <MoreProducts others={product.others} />
          <FeatureProducts />
          <InfoSection />
        </VStack>
      </Container>
    </Box>
  );
};

export default EarphoneDetail;
