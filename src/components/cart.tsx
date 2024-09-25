'use client';
import { CartSummary } from '@/app/(shop)/checkout/_components/cart';
import {
  Button,
  useDisclosure,
  VStack,
  Image,
  Heading,
  Text,
  Flex,
} from '@/utils/chakra-components';
import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import Counter from './counter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import {
  decrementQuantity,
  emptyCart,
  incrementQuantity,
} from '@/state/features/cart/cartSlice';
import CtaBtn from './cta-btn';
import { useRouter } from 'next-nprogress-bar';

export default function CartIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.cartQuantity
  );
  const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const id = 'invalid-checkout-toast';

  const handleCheckout = () => {
    if (!(cartItems.length < 1)) {
      onClose();
      router.push('/checkout');
      return;
    }

    if (!toast.isActive(id)) {
      toast({
        id,
        status: 'info',
        title: 'There is nothing to checkout. Your cart is empty.',
        variant: 'left-accent',
        colorScheme: 'red',
        position: 'top',
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button
        aria-label={isOpen ? 'close cart' : 'open cart'}
        p="0"
        h="28px"
        minW="28px"
        bg="transparent"
        pos="relative"
        _hover={{
          backgroundColor: 'transparent',
        }}
        onClick={onOpen}
      >
        <Image src="/assets/shared/desktop/icon-cart.svg" alt="" />
        {cartItems.length < 1 ? null : (
          <Box
            as="span"
            pos="absolute"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            right="0px"
            top="0px"
            w="5"
            h="5"
            px="3"
            py="3"
            borderRadius="full"
            transform="translate(50%, -40%)"
            bg="aph.primary.100"
            color="aph.white"
            fontSize="xs"
            fontWeight="semibold"
          >
            {cartItems.length > 3 ? '3+' : `${cartItems.length}`}
          </Box>
        )}
      </Button>

      <Modal
        variant={'cartModalStyle'}
        blockScrollOnMount={true}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textTransform="uppercase"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading variant="h6">cart ({cartItemsCount})</Heading>
            <Button
              textDecoration="underline"
              fontWeight="medium"
              opacity="0.5"
              p="0"
              h="min-content"
              background="transparent"
              _hover={{
                color: 'aph.primary.100',
                opacity: '1',
                background: 'transparent',
              }}
              onClick={() => dispatch(emptyCart())}
            >
              Remove all
            </Button>
          </ModalHeader>
          <ModalBody>
            {cartItems.length === 0 ? (
              <Box
                pt="6"
                textAlign="center"
                textTransform="uppercase"
                fontWeight="semibold"
                fontSize="lg"
              >
                Your cart is Empty 🌵🌵
              </Box>
            ) : (
              <>
                <VStack
                  as="ul"
                  spacing={'6'}
                  align={'stretch'}
                  pt={{ base: '31px' }}
                  pb={{ base: '8' }}
                >
                  {cartItems.map((item) => (
                    <CartItem
                      productName={item.name}
                      productPrice={item.price}
                      productQuantity={item.quantity}
                      productUrl={item.image}
                      productId={item.id}
                      key={item.id}
                    />
                  ))}
                </VStack>
                <CartSummary label="Total" price={cartTotal} />
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <CtaBtn variant="solid" w="full" onClick={handleCheckout}>
              checkout
            </CtaBtn>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

type TCartItemProps = {
  productId: number;
  productPrice: number;
  productName: string;
  productQuantity: number;
  productUrl: string;
};

export function CartItem({
  productId,
  productPrice,
  productName,
  productQuantity,
  productUrl,
}: TCartItemProps) {
  const [count, setCount] = useState(productQuantity);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    let newCount = count + 1;
    setCount(newCount);
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = () => {
    if (count > 0) {
      let newCount = count - 1;
      setCount(newCount);
      dispatch(decrementQuantity(productId));
    }
  };
  return (
    <HStack as="li" justify={'space-between'}>
      <HStack spacing={'4'}>
        <Image
          src={productUrl}
          width={'64px'}
          height={'64px'}
          borderRadius={'lg'}
          alt="zx9-speaker"
        />
        <VStack align={'flex-start'} spacing={'0'}>
          <Text fontWeight={'bold'} textTransform={'uppercase'}>
            {productName.split(' ')[0]}
          </Text>
          <Text opacity={'0.5'} fontSize={'14px'} fontWeight={'bold'}>
            $ {productPrice}
          </Text>
        </VStack>
      </HStack>
      <Flex align="stretch" h="10">
        <Counter
          increment={handleIncrement}
          decrement={handleDecrement}
          currentCount={count}
          paddingX="2"
        />
      </Flex>
    </HStack>
  );
}
