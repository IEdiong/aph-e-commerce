import Cta from '@/components/cta';
import NavigateBack from '@/components/navigate-back';
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  VStack,
  Text,
  Image,
  FormControl,
  FormLabel,
  Input,
} from '@/utils/chakra-components';
import { Suspense } from 'react';

export default function CheckoutPage() {
  return (
    <Box as="main">
      <Container pb="160px" pt={{ base: '4', md: '33px', lg: '79px' }}>
        <Suspense fallback={null}>
          <NavigateBack />
        </Suspense>

        <Flex
          pt={{ base: '6', lg: '38px' }}
          columnGap={'30px'}
          align={'flex-start'}
        >
          <Box
            px={{ base: '', lg: '12' }}
            pt={{ base: '', lg: '54px' }}
            pb={{ base: '', lg: '12' }}
            borderRadius={'lg'}
            bg={'aph.white'}
            w="full"
          >
            <Heading variant={'h3'} mb={{ base: '', lg: '41px' }}>
              Checkout
            </Heading>
            <FormControl as="fieldset" mb={{ base: '', lg: '53px' }}>
              <FormLabel
                as="legend"
                color="aph.primary.100"
                fontSize={'xs'}
                fontWeight={'bold'}
                textTransform={'uppercase'}
                letterSpacing={'1px'}
                mb={'4'}
              >
                Billing Details
              </FormLabel>
              <Flex
                flexWrap={'wrap'}
                rowGap={{ base: '', lg: '6' }}
                columnGap={{ base: '', lg: '4' }}
              >
                <FormControl maxW={{ base: '', lg: '309px' }}>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder={'Alexei Ward'} />
                </FormControl>
                <FormControl maxW={{ base: '', lg: '309px' }}>
                  <FormLabel>Email Address</FormLabel>
                  <Input placeholder={'alexei@mail.com'} />
                </FormControl>
                <FormControl maxW={{ base: '', lg: '309px' }}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input placeholder={'+1 202-555-0136'} />
                </FormControl>
              </Flex>
            </FormControl>
            <FormControl as="fieldset" mb={{ base: '', lg: '61px' }}>
              <FormLabel
                as="legend"
                color="aph.primary.100"
                fontSize={'xs'}
                fontWeight={'bold'}
                textTransform={'uppercase'}
                letterSpacing={'1px'}
                mb={'4'}
              >
                Shipping Info
              </FormLabel>
              <Flex
                flexWrap={'wrap'}
                rowGap={{ base: '', lg: '6' }}
                columnGap={{ base: '', lg: '4' }}
              >
                <FormControl maxW={{ base: '', lg: 'full' }}>
                  <FormLabel>Address</FormLabel>
                  <Input placeholder={'1137 Williams Avenue'} />
                </FormControl>
                <FormControl maxW={{ base: '', lg: '309px' }}>
                  <FormLabel>ZIP Code</FormLabel>
                  <Input placeholder={'10001'} />
                </FormControl>
                <FormControl maxW={{ base: '', lg: '309px' }}>
                  <FormLabel>City</FormLabel>
                  <Input placeholder={'New York'} />
                </FormControl>
                <FormControl maxW={{ base: '', lg: '309px' }}>
                  <FormLabel>Country</FormLabel>
                  <Input placeholder={'United States'} />
                </FormControl>
              </Flex>
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel
                as="legend"
                color="aph.primary.100"
                fontSize={'xs'}
                fontWeight={'bold'}
                textTransform={'uppercase'}
                letterSpacing={'1px'}
                mb={'4'}
              >
                Payment Details
              </FormLabel>
              <Flex
                flexWrap={'wrap'}
                rowGap={{ base: '', lg: '6' }}
                columnGap={{ base: '', lg: '4' }}
              >
                <FormControl maxW={{ base: '', lg: '309px' }}>
                  <FormLabel>e-Money Number</FormLabel>
                  <Input placeholder={'238521993'} />
                </FormControl>
                <FormControl maxW={{ base: '', lg: '309px' }}>
                  <FormLabel>e-Money PIN</FormLabel>
                  <Input placeholder={'6891'} />
                </FormControl>
              </Flex>
            </FormControl>
          </Box>
          <Box
            borderRadius={'lg'}
            px={{ base: '', lg: '33px' }}
            py={{ base: '', lg: '8' }}
            bg={'aph.white'}
            minW={'350px'}
          >
            <Heading variant={'h6'}>Summary</Heading>
            <VStack
              as="ul"
              spacing={'6'}
              align={'stretch'}
              pt={{ base: '', lg: '31px' }}
              pb={{ base: '', lg: '8' }}
            >
              <CartItem />
              <CartItem />
              <CartItem />
            </VStack>
            <VStack align={'stretch'} mb={{ base: '', lg: '6' }}>
              <CartSummary label="Total" price={5396} />
              <CartSummary label="Shipping" price={50} />
              <CartSummary label="Vat (included)" price={1079} />
            </VStack>
            <CartSummary
              label="Grand Total"
              price={5446}
              color="aph.primary.100"
            />
            <Cta variant="solid" w="full" mt={{ base: '', lg: '8' }}>
              CONTINUE & PAY
            </Cta>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

function CartItem() {
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
            $ 2,999
          </Text>
        </VStack>
      </HStack>
      <Text fontWeight={'bold'} opacity={'0.5'}>
        x1
      </Text>
    </HStack>
  );
}

function CartSummary({
  label,
  price,
  color = 'aph.black.900',
}: {
  label: string;
  price: number;
  color?: string;
}) {
  return (
    <HStack justify={'space-between'}>
      <Text opacity={'0.5'} textTransform={'uppercase'}>
        {label}
      </Text>
      <Text
        fontWeight={'bold'}
        fontSize={'lg'}
        lineHeight={'normal'}
        color={color}
      >
        $ {price.toLocaleString()}
      </Text>
    </HStack>
  );
}
