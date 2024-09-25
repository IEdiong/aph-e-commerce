'use client';
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
} from '@/utils/chakra-components';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import Counter from './counter';
import Picture from './picture';
import convertDesktopSizeImg from '@/libs/get-img';
import CtaBtn from './cta-btn';
import Cta from './cta';
import { TProduct } from '@/types';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/state/features/cart/cartSlice';
import { useToast } from '@chakra-ui/react';

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

export type IDirection = 'left-to-right' | 'right-to-left';

const ProductCardContext = createContext({
  isNew: false,
  canAddToCart: false,
  increment: () => {},
  decrement: () => {},
  currentCount: 1,
  product: {} as IProduct,
  variant: 'summary',
});

type ProductCardProps = {
  product: IProduct;
  direction?: IDirection;
  canAddToCart?: boolean;
  variant?: 'summary' | 'detail';
} & PropsWithChildren;

export const Root = ({
  product,
  canAddToCart = false,
  direction = 'left-to-right',
  variant = 'detail',
  children,
}: ProductCardProps) => {
  const { new: isNew } = product;
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrement = () => {
    if (count > 1) {
      let newCount = count - 1;
      setCount(newCount);
    }
  };

  return (
    <ProductCardContext.Provider
      value={{
        isNew,
        canAddToCart,
        increment: handleIncrement,
        decrement: handleDecrement,
        currentCount: count,
        product,
        variant,
      }}
    >
      <Flex
        flexDir={{
          base: 'column',
          md: canAddToCart ? 'row' : 'column',
          lg: canAddToCart
            ? 'row'
            : direction == 'left-to-right'
            ? 'row'
            : 'row-reverse',
        }}
        align={canAddToCart ? { md: 'stretch', lg: 'center' } : 'center'}
        justify={canAddToCart ? { lg: 'flex-start' } : { lg: 'flex-start' }}
        columnGap={canAddToCart ? { md: '69px', lg: '125px' } : { lg: '125px' }}
        textAlign={canAddToCart ? 'left' : { base: 'center', lg: 'left' }}
      >
        {children}
      </Flex>
    </ProductCardContext.Provider>
  );
};

type ProductCardImageProps = {
  src: string;
  alt: string;
};
export const Image = ({ src, alt }: ProductCardImageProps) => {
  const { canAddToCart } = useContext(ProductCardContext);

  return (
    <Box
      sx={canAddToCart ? { minW: '281px' } : { maxW: { lg: '540px' } }}
      borderRadius="lg"
      overflow="hidden"
    >
      <Picture
        imgLgUrl={src}
        imgMdUrl={convertDesktopSizeImg(src, 'tablet')}
        imgSmUrl={convertDesktopSizeImg(src, 'mobile')}
        alt={alt}
      />
    </Box>
  );
};

type ProductCardContentProps = {} & PropsWithChildren;
export const Content = ({ children }: ProductCardContentProps) => {
  const { canAddToCart } = useContext(ProductCardContext);

  return (
    <VStack
      maxW={{ base: '560px', lg: '445px' }}
      spacing={canAddToCart ? { base: '6', md: '32px' } : '32px'}
      align={{ lg: 'flex-start' }}
      justify={{ md: 'center' }}
      mt={
        canAddToCart ? { base: '32px', md: '0px' } : { base: '52px', lg: '0px' }
      }
    >
      {children}
    </VStack>
  );
};

export const New = () => {
  const { isNew } = useContext(ProductCardContext);
  return (
    <>
      {isNew && (
        <Text
          variant={'overline'}
          as="span"
          mb={-4}
          textTransform={'uppercase'}
        >
          NEW PRODUCT
        </Text>
      )}
    </>
  );
};

type ProductCardHeadingProps = {} & PropsWithChildren;
export const CardHeading = ({ children }: ProductCardHeadingProps) => {
  const { canAddToCart } = useContext(ProductCardContext);
  return (
    <Heading
      as="h2"
      variant={
        canAddToCart ? { base: 'h2-sm', lg: 'h2' } : { base: 'h2-sm', md: 'h2' }
      }
    >
      {children}
    </Heading>
  );
};

type ProductCardDescriptionProps = {} & PropsWithChildren;
export const Description = ({ children }: ProductCardDescriptionProps) => {
  return <Text opacity="0.5">{children}</Text>;
};

type ProductCardPriceProps = {} & PropsWithChildren;
export const Price = ({ children }: ProductCardPriceProps) => {
  const { canAddToCart } = useContext(ProductCardContext);

  return (
    <>
      {canAddToCart && (
        <Text fontSize="lg" fontWeight="bold" mb={{ base: '0px', md: '7px' }}>
          <span>$</span> {children}
        </Text>
      )}
    </>
  );
};

type ProductCardActionsProps = {} & PropsWithChildren;
export const Actions = ({ children }: ProductCardActionsProps) => {
  const { canAddToCart } = useContext(ProductCardContext);
  return (
    <HStack
      spacing={4}
      align="stretch"
      mt={canAddToCart ? 2 : { base: -2, lg: 2 }}
      justify={
        canAddToCart ? 'flex-start' : { base: 'center', lg: 'flex-start' }
      }
    >
      {children}
    </HStack>
  );
};

export const CardCounter = () => {
  const { canAddToCart, increment, decrement, currentCount } =
    useContext(ProductCardContext);

  return (
    <>
      {canAddToCart && (
        <Counter
          increment={increment}
          decrement={decrement}
          currentCount={currentCount}
        />
      )}
    </>
  );
};

type ProductCardButtonProps = {} & PropsWithChildren;
export const CardButton = ({ children }: ProductCardButtonProps) => {
  const {
    canAddToCart,
    product,
    currentCount: count,
  } = useContext(ProductCardContext);
  const dispatch = useDispatch();
  const toast = useToast();
  const id = 'add-to-cart-toast';

  const handleAddToCart = (product: IProduct) => {
    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: count,
      image: `/assets/cart/image-${product.slug}.jpg`,
    } as TProduct;

    dispatch(addToCart(cartProduct));
    if (!toast.isActive(id)) {
      toast({
        id,
        status: 'info',
        title: `${count} unit${count > 1 ? 's' : ''} of "${
          product.name
        }" has been
        added to your cart`,
        variant: 'left-accent',
        colorScheme: 'orange',
        position: 'bottom-left',
      });
    }
  };

  return (
    <>
      {canAddToCart && (
        <CtaBtn onClick={() => handleAddToCart(product)}>{children}</CtaBtn>
      )}
    </>
  );
};

type ProductCardLinkProps = {
  to: string;
} & PropsWithChildren;
export const CardLink = ({ to, children }: ProductCardLinkProps) => {
  const { canAddToCart } = useContext(ProductCardContext);

  return (
    !canAddToCart && (
      <Cta variant="solid" w="160px" to={to}>
        {children}
      </Cta>
    )
  );
};
