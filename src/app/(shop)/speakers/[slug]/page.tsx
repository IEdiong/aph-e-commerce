import { Suspense } from 'react';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import ProductCard from '@/components/product-card-cart';
import { Box, Container, Flex, VStack } from '@/utils/chakra-components';
import NavigateBack from '@/components/navigate-back';
import Features from '@/components/features';
import InTheBox from '@/components/in-the-box';
import MoreProducts from '@/components/more-products';
import Gallery from '@/components/gallery';
import Data from '@/data/data.json';

const items = Data;

const SpeakerDetail = ({ params }: { params: { slug: string } }) => {
  const product = items[Number(params.slug) - 1];

  return (
    <Box as="main">
      <Container pb="160px" pt={{ base: '4', md: '33px', lg: '79px' }}>
        <Suspense fallback={null}>
          <NavigateBack />
        </Suspense>
        <VStack
          mt={{ base: '6', lg: '56px' }}
          spacing={{ base: '120px', lg: '160px' }}
          align="stretch"
        >
          <ProductCard
            productImageUrl={product.image.desktop}
            productName={product.name}
            summaryDescription={product.description}
            productPrice={product.price}
            canAddToCart={true}
            isNew={product.new}
            ctaText={'Add to cart'}
          />
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            justify="flex-start"
            columnGap="125px"
            rowGap="120px"
          >
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

export default SpeakerDetail;
