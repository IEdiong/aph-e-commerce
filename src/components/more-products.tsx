import { Box, Flex, Heading, Image, VStack } from '@/utils/chakra-components';
import Cta from './cta';

const MoreProducts = () => {
  return (
    <VStack as="section" spacing="16">
      <Heading as="h2" textAlign="center" variant="h3">
        You may also like
      </Heading>
      <Flex columnGap="30px">
        <ProductCard
          productImgUrl="/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
          productName="XX99 MARK I"
        />
        <ProductCard
          productImgUrl="/assets/shared/desktop/image-xx59-headphones.jpg"
          productName="XX59"
        />
        <ProductCard
          productImgUrl="/assets/shared/desktop/image-zx9-speaker.jpg"
          productName="ZX9 SPEAKERS"
        />
      </Flex>
    </VStack>
  );
};

const ProductCard = ({
  productImgUrl,
  productName,
  productPage = '/',
}: ProductCardProps) => {
  return (
    <Box as="article" maxW="350px">
      <Box borderRadius="lg" overflow="hidden">
        <Image src={productImgUrl} alt={productName} />
      </Box>
      <VStack textAlign="center" pt="40px" spacing="32px">
        <Heading as="h3" variant="h5">
          {productName}
        </Heading>
        <Cta to={productPage} variant="solid" w="160px">
          See Product
        </Cta>
      </VStack>
    </Box>
  );
};

interface ProductCardProps {
  productImgUrl: string;
  productName: string;
  productPage?: string;
}

export default MoreProducts;
