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
import { TProduct } from '@/types';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/state/features/cart/cartSlice';
import { useToast } from '@chakra-ui/react';

const ProductCardContext = createContext({
  isNew: false,
  canAddToCart: false,
  increment: () => {},
  decrement: () => {},
  currentCount: 1,
  product: {} as IProduct,
});

type ProductCardProps = {
  product: IProduct;
  direction?: 'left-to-right' | 'right-to-left';
  canAddToCart?: boolean;
  ctaText?: string;
} & PropsWithChildren;

export const Root = ({
  product,
  canAddToCart = false,
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
      }}
    >
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
  return (
    <Box borderRadius="lg" overflow="hidden" minW="281px">
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
  return (
    <VStack
      maxW={{ base: '560px', lg: '445px' }}
      spacing={{ base: '6', md: '32px' }}
      align={{ lg: 'flex-start' }}
      justify={{ md: 'center' }}
      mt={{ base: '32px', md: '0px' }}
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
  return (
    <Heading as="h2" variant={{ base: 'h2-sm', lg: 'h2' }}>
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
  return (
    <HStack spacing={4} align="stretch" mt={2} justify={'flex-start'}>
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

{
  /* <ProductCardImage src={productImg} alt={name} />
<ProductCardContent>
  <ProductCardNew />
  <ProductCardHeading>{name}</ProductCardHeading>
  <ProductCardDescription>{description}</ProductCardDescription>
  <ProductCardPrice>{productPrice}</ProductCardPrice>
  <ProductCardActions>
    <ProductCardCounter />

    <ProductCardButton>Add to cart</ProductCardButton>
  </ProductCardActions>
</ProductCardContent>  */
}
