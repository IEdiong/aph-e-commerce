'use client';
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
} from '@/utils/chakra-components';
import { useState } from 'react';
import Counter from './counter';
import Picture from './picture';
import convertDesktopSizeImg from '@/libs/get-img';
import CtaBtn from './cta-btn';
import { TProduct } from '@/types';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/state/features/cart/cartSlice';
import { useToast } from '@chakra-ui/react';

const ProductCardCart = ({
  product,
  canAddToCart = false,
  ctaText = 'See Product',
}: ProductCardProps) => {
  const { name, description, price: productPrice, new: isNew, image } = product;
  const { desktop: productImg } = image;
  const [price, setPrice] = useState<number>(productPrice);
  const [count, setCount] = useState(1);
  const initailPrice = productPrice;
  const dispatch = useDispatch();
  const toast = useToast();

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

  const handleAddToCart = (product: IProduct) => {
    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: count,
      image: `/assets/cart/image-${product.slug}.jpg`,
    } as TProduct;

    dispatch(addToCart(cartProduct));
    toast({
      status: 'info',
      title: `${count} unit${count > 1 ? 's' : ''} of "${product.name}" has been
      added to your cart`,
      variant: 'left-accent',
      colorScheme: 'orange',
      position: 'bottom-left',
    });
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
          imgLgUrl={productImg}
          imgMdUrl={convertDesktopSizeImg(productImg, 'tablet')}
          imgSmUrl={convertDesktopSizeImg(productImg, 'mobile')}
          alt={name}
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
          {name}
        </Heading>
        <Text opacity="0.5">{description}</Text>
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

          <CtaBtn text={ctaText} onClick={() => handleAddToCart(product)} />
        </HStack>
      </VStack>
    </Flex>
  );
};

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  new: boolean;
  slug: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
interface ProductCardProps {
  product: IProduct;
  direction?: 'left-to-right' | 'right-to-left';
  canAddToCart?: boolean;
  ctaText?: string;
}

export default ProductCardCart;
