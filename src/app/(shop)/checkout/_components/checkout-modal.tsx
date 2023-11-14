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
  useDisclosure,
  Box,
  Flex,
  VStack,
  Divider,
  Button,
} from '@chakra-ui/react';

import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';
import { CartItem } from './cart';

export default function CheckoutModal() {
  const { onClose } = useDisclosure();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartTotal = useSelector((state: RootState) => state.cart.cartTotal);

  return (
    <Modal
      variant={'checkoutModalStyle'}
      isOpen={true}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <SuccessIcon boxSize={16} />
          <Heading
            variant={{ base: 'h2-sm', md: 'h3' }}
            mt={{ base: '8', md: '8' }}
          >
            Thank you <br /> for your order
          </Heading>
          <Text mt="6" opacity="0.5">
            You will receive an email confirmation shortly.
          </Text>
        </ModalHeader>
        <ModalBody>
          <Flex
            align="stretch"
            w="full"
            borderRadius="lg"
            bg="aph.neutral.100"
            overflow="hidden"
          >
            <Box p="6" flexBasis="246px" flexShrink="0">
              <VStack as="ul" spacing={'6'} align={'stretch'}>
                {cartItems.map((item) => (
                  <CartItem
                    productName={item.name}
                    productPrice={item.price}
                    productQuantity={item.quantity}
                    productUrl={item.image}
                    key={item.id}
                  />
                ))}
              </VStack>
              <Divider bg="aph.black.900" h="1px" opacity="0.08" mt="2" />
              <Button w="full" _hover={{ bg: 'none' }} opacity="0.5">
                View less
              </Button>
            </Box>
            <VStack
              align="baseline"
              justify="center"
              bg="aph.black.900"
              color="aph.white"
              w="full"
              p="8"
              textTransform="uppercase"
            >
              <Text opacity="0.5">Grand total</Text>
              <Text fontWeight="bold" fontSize="lg">
                $ {cartTotal}
              </Text>
            </VStack>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Cta to="/" onClick={onClose} w="full">
            back to home
          </Cta>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
