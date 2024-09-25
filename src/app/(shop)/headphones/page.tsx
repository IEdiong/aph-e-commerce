import type { Metadata } from 'next';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import * as ProductCard from '@/components/product-card-cart';
import { Box, Container, Heading, VStack } from '@/utils/chakra-components';
import Data from '@/data/data.json';

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
            <ProductList />
            <FeatureProducts />
            <InfoSection />
          </VStack>
        </Container>
      </Box>
    </>
  );
};

const ProductList = () => {
  const PRODUCTS = Data.filter((data) => data.category === 'headphones')
    .reverse()
    .map((data, idx) => {
      const direction = (
        idx % 2 === 0 ? 'left-to-right' : 'right-to-left'
      ) as ProductCard.IDirection;
      return { ...data, direction };
    });

  return PRODUCTS.map((product) => (
    <ProductCard.Root
      key={product.id}
      product={product}
      canAddToCart={false}
      direction={product.direction}
    >
      <ProductCard.Image
        src={product.categoryImage.desktop}
        alt={product.name}
      />
      <ProductCard.Content>
        <ProductCard.New />
        <ProductCard.CardHeading>{product.name}</ProductCard.CardHeading>
        <ProductCard.Description>{product.description}</ProductCard.Description>
        <ProductCard.Price>{product.price}</ProductCard.Price>
        <ProductCard.Actions>
          <ProductCard.CardCounter />
          <ProductCard.CardButton>Add to cart</ProductCard.CardButton>
          <ProductCard.CardLink to={`/headphones/${product.id}`}>
            See product
          </ProductCard.CardLink>
        </ProductCard.Actions>
      </ProductCard.Content>
    </ProductCard.Root>
  ));
};

export default HeadphonesPage;
