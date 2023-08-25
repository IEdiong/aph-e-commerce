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

const ProductCardCart = ({
  productImageUrl = '/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
  productName = 'XX99 Mark II Headphones',
  summaryDescription = 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
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
        md: 'row',
      }}
      align={{ md: 'stretch', lg: 'center' }}
      justify={{ lg: 'flex-start' }}
      columnGap={{ md: '69px', lg: '125px' }}
      textAlign="left"
    >
      <Box borderRadius="lg" overflow="hidden" minW="281px">
        <Picture
          imgLgUrl={productImageUrl}
          imgMdUrl={convertDesktopSizeImg(productImageUrl, 'tablet')}
          imgSmUrl={convertDesktopSizeImg(productImageUrl, 'mobile')}
          alt={productName}
        />
      </Box>
      <VStack
        maxW={{ base: '560px', lg: '445px' }}
        spacing={{ base: '6', md: '32px' }}
        align={{ lg: 'flex-start' }}
        justify={{ md: 'center' }}
        mt={{ base: '32px', md: '0px' }}
      >
        {isNew && (
          <Text variant={'overline'} as="span" mb={-4}>
            NEW PRODUCT
          </Text>
        )}
        <Heading as="h2" variant={{ base: 'h2-sm', lg: 'h2' }}>
          {productName}
        </Heading>
        <Text opacity="0.5">{summaryDescription}</Text>
        {canAddToCart && (
          <Text fontSize="lg" fontWeight="bold" mb={{ base: '0px', md: '7px' }}>
            <span>$</span> {price}
          </Text>
        )}
        <HStack spacing={4} align="stretch" mt={2} justify={'flex-start'}>
          {canAddToCart && (
            <Counter
              increment={handleIncrement}
              decrement={handleDecrement}
              currentCount={count}
            />
          )}
          <Cta variant="solid" w={{ lg: '160px' }} to={ctaLink}>
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

export default ProductCardCart;
