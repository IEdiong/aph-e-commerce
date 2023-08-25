import { Box, Flex, Heading, VStack } from '@/utils/chakra-components';
import Cta from './cta';
import Picture from './picture';
import convertDesktopSizeImg from '@/libs/get-img';

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
    <VStack as="section" spacing={{ base: '40px', md: '56px', lg: '16' }}>
      <Heading as="h2" textAlign="center" variant={{ base: 'h4', md: 'h3' }}>
        You may also like
      </Heading>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        columnGap={{ md: '11px', lg: '30px' }}
        rowGap="56px"
      >
        {others.map(({ name, image }, idx) => (
          <ProductCard
            key={idx}
            productImgUrl={image.desktop}
            productName={name}
            productPage={getUrl(name)}
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
    <Box as="article" maxW={{ md: '350px' }}>
      <Box borderRadius="lg" overflow="hidden">
        <Picture
          alt={productName}
          imgLgUrl={productImgUrl}
          imgMdUrl={convertDesktopSizeImg(productImgUrl, 'tablet')}
          imgSmUrl={convertDesktopSizeImg(productImgUrl, 'mobile')}
        />
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

function getUrl(productName: string) {
  const idx = productLink[productName];
  switch (idx) {
    case 1:
      return '/earphones/1';
    case 2:
      return '/headphones/2';
    case 3:
      return '/headphones/3';
    case 4:
      return '/headphones/4';
    case 5:
      return '/speakers/5';
    case 6:
      return '/speakers/6';
  }
}

interface ProductLink {
  [productName: string]: number;
}

const productLink: ProductLink = {
  'YX1 Wireless Earphones': 1,
  XX59: 2,
  'XX99 Mark I': 3,
  'XX99 Mark II': 4,
  'ZX7 Speaker': 5,
  'ZX9 Speaker': 6,
};
interface ProductCardProps {
  productImgUrl: string;
  productName: string;
  productPage?: string;
}

export default MoreProducts;
