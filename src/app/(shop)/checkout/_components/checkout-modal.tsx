'use client';

import Cta from '@/components/cta';
import { SuccessIcon } from '@/components/icons';
import {
  Heading,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Flex,
  VStack,
  Divider,
  Button,
} from '@chakra-ui/react';

import { CartItem } from './cart';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { emptyCart } from '@/state/features/cart/cartSlice';

type TCheckoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  cartTotal: number;
};

export default function CheckoutModal({
  isOpen,
  onClose,
  cartTotal,
}: TCheckoutModalProps) {
  const [isSingleItem, setSingleItem] = useState<boolean>(true);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const dispatch = useDispatch();

  const toggleItemsList = () => {
    setSingleItem(!isSingleItem);
  };

  const handleModalClose = () => {
    dispatch(emptyCart());
    onClose();
  };

  return (
    <Modal
      variant={'checkoutModalStyle'}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <SuccessIcon boxSize={16} />
          <Heading variant={{ base: 'h2-sm', md: 'h3' }} mt="8">
            Thank you <br /> for your order
          </Heading>
          <Text mt="6" opacity="0.5">
            You will receive an email confirmation shortly.
          </Text>
        </ModalHeader>
        <ModalBody>
          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            align="stretch"
            w="full"
            borderRadius="lg"
            bg="aph.neutral.100"
            overflow="hidden"
          >
            <Box
              px="6"
              pt="6"
              pb="3"
              flexBasis={{ base: '140px', md: '246px' }}
              flexShrink="0"
            >
              <VStack as="ul" spacing={'6'} align={'stretch'}>
                {isSingleItem ? (
                  <CartItem
                    productName={cartItems[0]?.name}
                    productPrice={cartItems[0]?.price}
                    productQuantity={cartItems[0]?.quantity}
                    productUrl={cartItems[0]?.image}
                  />
                ) : (
                  cartItems.map((item) => (
                    <CartItem
                      productName={item.name}
                      productPrice={item.price}
                      productQuantity={item.quantity}
                      productUrl={item.image}
                      key={item.id}
                    />
                  ))
                )}
              </VStack>
              <Divider bg="aph.black.900" h="1px" opacity="0.08" mt="2" />
              <Button
                w="full"
                h="30px"
                opacity="0.5"
                fontSize="12px"
                fontWeight="bold"
                _hover={{ bg: 'none' }}
                onClick={toggleItemsList}
              >
                {isSingleItem
                  ? `and ${cartItems.length - 1} other item(s)`
                  : 'View less'}
              </Button>
            </Box>
            <VStack
              align="baseline"
              justify="flex-end"
              bg="aph.black.900"
              color="aph.white"
              w="full"
              paddingInline={{ base: '6', md: '8' }}
              paddingBlockStart={{ base: '15px', md: '0' }}
              paddingBlockEnd={{ base: '19px', md: '10' }}
              textTransform="uppercase"
            >
              <Text opacity="0.5">Grand total</Text>
              <Text fontWeight="bold" fontSize="lg">
                $ {cartTotal.toLocaleString()}
              </Text>
            </VStack>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Cta to="/" onClick={handleModalClose} w="full">
            back to home
          </Cta>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
