import type { Metadata } from 'next';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import ProductCard from '@/components/product-card';
import { Box, Container, Heading, VStack } from '@/utils/chakra-components';

export const metadata: Metadata = {
  title: 'Headphones | audiophile',
  description: 'Get the best audio devices for your listening',
};
const HeadphonesPage = () => {
  return (
    <>
      <Box as="header" bgColor="aph.black.900" py="98px" textAlign="center">
        <Heading as="h1" variant="h2" color="aph.white">
          Headphones
        </Heading>
      </Box>
      <Box as="main">
        <Container maxW="container.lg" px="0" py="160px">
          <VStack spacing={{ lg: '160px' }} align="stretch">
            <ProductCard
              productImageUrl="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
              productName="XX99 Mark II Headphones"
              summaryDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
              isNew={true}
              ctaLink="/headphones/4"
            />
            <ProductCard
              productImageUrl="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
              productName="XX99 Mark I
              Headphones"
              summaryDescription="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
              direction="right-to-left"
              ctaLink="/headphones/3"
            />
            <ProductCard
              productImageUrl="/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
              productName="XX59
              Headphones"
              summaryDescription="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
              ctaLink="/headphones/2"
            />
            <FeatureProducts />
            <InfoSection />
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default HeadphonesPage;
