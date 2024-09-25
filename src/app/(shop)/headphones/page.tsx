import type { Metadata } from 'next';
import { Box, Container, Heading, VStack } from '@/utils/chakra-components';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import ProductList from '@/components/product-list';

export const metadata: Metadata = {
  title: 'Headphones | audiophile',
  description: 'Get the best audio devices for your listening',
};
const HeadphonesPage = () => {
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
          Headphones
        </Heading>
      </Box>
      <Box as="main">
        <Container
          pt={{ base: '64px', md: '120px', lg: '160px' }}
          pb={{ base: '120px', lg: '160px' }}
        >
          <VStack spacing={{ base: '120px', lg: '160px' }} align="stretch">
            <ProductList category="headphones" />
            <FeatureProducts />
            <InfoSection />
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default HeadphonesPage;
