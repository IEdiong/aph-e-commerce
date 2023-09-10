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

export default function CartIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Heading variant="h6">cart (3)</Heading>
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
            >
              Remove all
            </Button>
          </ModalHeader>
          <ModalBody>
            <VStack
              as="ul"
              spacing={'6'}
              align={'stretch'}
              pt={{ base: '31px' }}
              pb={{ base: '8' }}
            >
              <CartItem productPrice={2999} />
              <CartItem productPrice={2999} />
              <CartItem productPrice={2999} />
            </VStack>
            <CartSummary label="Total" price={5396} />
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

function CartItem({ productPrice }: { productPrice: number }) {
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
    <HStack as="li" justify={'space-between'}>
      <HStack spacing={'4'}>
        <Image
          src="/assets/cart/image-zx9-speaker.jpg"
          width={'64px'}
          height={'64px'}
          borderRadius={'lg'}
          alt="zx9-speaker"
        />
        <VStack align={'flex-start'} spacing={'0'}>
          <Text fontWeight={'bold'} textTransform={'uppercase'}>
            zx9
          </Text>
          <Text opacity={'0.5'} fontSize={'14px'} fontWeight={'bold'}>
            $ {price}
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
