'use client';
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
} from '@/utils/chakra-components';
import Cta from './cta';
import { useState } from 'react';
import Counter from './counter';
import Picture from './picture';
import convertDesktopSizeImg from '@/libs/get-img';

const ProductCard = ({
  productImageUrl = '/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
  productName = 'XX99 Mark II Headphones',
  summaryDescription = 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  direction = 'left-to-right',
  isNew = false,
  canAddToCart = false,
  productPrice = 0,
  ctaText = 'See Product',
  ctaLink = '/',
}: ProductCardProps) => {
  const [price, setPrice] = useState<number>(productPrice);
  const [count, setCount] = useState(1);
  const initailPrice = productPrice;

  const handleIncrement = () => {
    let newCount = count + 1;
    let newPrice = initailPrice * newCount;
    setPrice(newPrice);
    setCount(newCount);
  };

  const handleDecrement = () => {
    if (count > 1) {
      let newCount = count - 1;
      let newPrice = price - initailPrice;
      setPrice(newPrice);
      setCount(newCount);
    }
  };

  return (
    <Flex
      flexDir={{
        base: 'column',
        lg: direction == 'left-to-right' ? 'row' : 'row-reverse',
      }}
      align={'center'}
      justify={{ lg: 'flex-start' }}
      columnGap={{ lg: '125px' }}
      textAlign={{ base: 'center', lg: 'left' }}
    >
      <Box maxW={{ lg: '540px' }} borderRadius="lg" overflow="hidden">
        <Picture
          imgLgUrl={productImageUrl}
          imgMdUrl={convertDesktopSizeImg(productImageUrl, 'tablet')}
          imgSmUrl={convertDesktopSizeImg(productImageUrl, 'mobile')}
          alt={productName}
        />
      </Box>
      <VStack
        maxW={{ base: '560px', lg: '445px' }}
        spacing="32px"
        align={{ lg: 'flex-start' }}
        mt={{ base: '52px', lg: '0px' }}
      >
        {isNew && (
          <Text variant={'overline'} as="span" mb={-4}>
            NEW PRODUCT
          </Text>
        )}
        <Heading as="h2" variant={{ base: 'h2-sm', md: 'h2' }}>
          {productName}
        </Heading>
        <Text opacity="0.5">{summaryDescription}</Text>
        {canAddToCart && (
          <Text fontSize="lg" fontWeight="bold" mb="7px">
            <span>$</span> {price}
          </Text>
        )}
        <HStack
          spacing={4}
          align="stretch"
          mt={{ base: -2, lg: 2 }}
          justify={{ base: 'center', lg: 'flex-start' }}
        >
          {canAddToCart && (
            <Counter
              increment={handleIncrement}
              decrement={handleDecrement}
              currentCount={count}
            />
          )}
          <Cta variant="solid" w="160px" to={ctaLink}>
            {ctaText}
          </Cta>
        </HStack>
      </VStack>
    </Flex>
  );
};

interface ProductCardProps {
  productImageUrl: string;
  productName: string;
  productPrice?: number;
  summaryDescription: string;
  isNew?: boolean;
  direction?: 'left-to-right' | 'right-to-left';
  canAddToCart?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export default ProductCard;
