import { Box, Flex, Heading, Image, VStack } from '@/utils/chakra-components';
import Cta from './cta';

interface IProduct {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

interface IProps {
  others: IProduct[];
}

const MoreProducts = ({ others }: IProps) => {
  return (
    <VStack as="section" spacing="16">
      <Heading as="h2" textAlign="center" variant="h3">
        You may also like
      </Heading>
      <Flex columnGap="30px">
        {others.map(({ name, image }, idx) => (
          <ProductCard
            key={idx}
            productImgUrl={image.desktop}
            productName={name}
          />
        ))}
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
