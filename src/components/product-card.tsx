import {
  Box,
  Flex,
  Heading,
  Image,
  VStack,
  Text,
} from '@/utils/chakra-components';
import Cta from './cta';

const ProductCard = ({
  productImageUrl = '/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
  productName = 'XX99 Mark II Headphones',
  summaryDescription = 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  direction = 'left-to-right',
  isNew = false,
}: ProductCardProps) => {
  return (
    <Flex
      flexDir={{ lg: direction == 'left-to-right' ? 'row' : 'row-reverse' }}
      align={{ lg: 'center' }}
      justify={{ lg: 'flex-start' }}
      columnGap={{ lg: '125px' }}
    >
      <Box maxW="540px" borderRadius="lg" overflow="hidden">
        <Image src={productImageUrl} alt="" display={'block'} />
      </Box>
      <VStack w="445px" spacing="32px" align={{ lg: 'flex-start' }}>
        {isNew && (
          <Text variant={'overline'} as="span" mb={-4}>
            NEW PRODUCT
          </Text>
        )}
        <Heading as="h2" variant="h2">
          {productName}
        </Heading>
        <Text opacity="0.5">{summaryDescription}</Text>
        <Cta variant="solid" w="160px" mt={2}>
          See Product
        </Cta>
      </VStack>
    </Flex>
  );
};

interface ProductCardProps {
  productImageUrl: string;
  productName: string;
  summaryDescription: string;
  isNew?: boolean;
  direction?: 'left-to-right' | 'right-to-left';
}

export default ProductCard;
