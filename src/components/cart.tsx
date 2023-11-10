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
} from '@chakra-ui/react';
import Cta from './cta';
import { useState } from 'react';
import Counter from './counter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import {
  decrementQuantity,
  emptyCart,
  incrementQuantity,
} from '@/state/features/cart/cartSlice';

export default function CartIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.cartQuantity
  );
  const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        p="0"
        h="28px"
        minW="28px"
        bg="transparent"
        _hover={{
          backgroundColor: 'transparent',
        }}
        onClick={onOpen}
      >
        <Image src="/assets/shared/desktop/icon-cart.svg" alt="" />
      </Button>

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
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
            <Cta variant="solid" w="full" to="/checkout" onClick={onClose}>
              ckeckout
            </Cta>
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

function CartItem({
  productId,
  productPrice,
  productName,
  productQuantity,
  productUrl,
}: TCartItemProps) {
  const [price, setPrice] = useState<number>(productPrice);
  const [count, setCount] = useState(productQuantity);
  const initailPrice = productPrice;
  const dispatch = useDispatch();

  const handleIncrement = () => {
    let newCount = count + 1;
    let newPrice = initailPrice * newCount;
    setPrice(newPrice);
    setCount(newCount);
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = () => {
    console.log(initailPrice);

    if (count > 1) {
      let newCount = count - 1;
      let newPrice = price - initailPrice;
      setPrice(newPrice);
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
            $ {initailPrice}
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
