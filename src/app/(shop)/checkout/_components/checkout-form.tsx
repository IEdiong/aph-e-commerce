'use client';
import CustomRadioButton from '@/components/custom-radio';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  Text,
  Button,
  Grid,
  GridItem,
} from '@/utils/chakra-components';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { CartItem, CartSummary } from './cart';
import InputField from '@/components/input-field';

// const phoneRegExp = /^\+{2}$/;

const CheckoutSchema = yup.object().shape({
  name: yup.string().required('Wrong format'),
  email: yup.string().email('Wrong format').required('Wrong format'),
  phoneNumber: yup.number().typeError('Wrong format').required('Wrong format'),
  address: yup.string().required('Wrong format'),
  zipCode: yup.number().typeError('Wrong format').required('Wrong format'),
  city: yup.string().required('Wrong format'),
  country: yup.string().required('Wrong format'),
  paymentMethod: yup.string().required('Wrong format'),
  eMoneyNumber: yup
    .number()
    .typeError('Wrong format')
    .when('paymentMethod', {
      is: (val: string) => val === 'e-money',
      then: (eMoneyNumber) => eMoneyNumber.required('Wrong format'),
    }),
  eMoneyPin: yup
    .number()
    .typeError('Wrong format')
    .when('paymentMethod', {
      is: (val: string) => val === 'e-money',
      then: (eMoneyPin) => eMoneyPin.required('Wrong format'),
    }),
});

export default function CheckoutForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        zipCode: '',
        city: '',
        country: '',
        paymentMethod: 'e-money',
        eMoneyNumber: '',
        eMoneyPin: '',
      }}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
        }, 1000);
      }}
      validationSchema={CheckoutSchema}
    >
      {(props) => (
        <Form>
          <Flex
            pt={{ base: '6', lg: '38px' }}
            columnGap={'30px'}
            rowGap={'32px'}
            align={{ base: 'stretch', lg: 'flex-start' }}
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Box
              px={{ base: '6', md: '28px', lg: '12' }}
              pt={{ base: '6', md: '30px', lg: '54px' }}
              pb={{ base: '31px', md: '30px', lg: '12' }}
              borderRadius={'lg'}
              bg={'aph.white'}
              w="full"
            >
              <Heading
                variant={{ base: 'h2-sm', md: 'h3' }}
                mb={{ base: '8', md: '41px' }}
              >
                Checkout
              </Heading>

              <FormControl as="fieldset" mb={{ base: '8', md: '53px' }}>
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
                <Grid
                  gridRowGap={{ base: '6' }}
                  gridColumnGap={{ md: '4' }}
                  gridTemplateColumns={{
                    md: '1fr 1fr',
                  }}
                >
                  <InputField
                    label="Name"
                    name="name"
                    placeholder="Alexei Ward"
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    placeholder="alexei@mail.com"
                  />
                  <InputField
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="+1 202-555-0136"
                  />
                </Grid>
              </FormControl>
              <FormControl as="fieldset" mb={{ base: '8', md: '61px' }}>
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
                <Grid
                  gridRowGap={{ base: '6' }}
                  gridColumnGap={{ md: '4' }}
                  gridTemplateColumns={{
                    md: '1fr 1fr',
                  }}
                >
                  <GridItem colSpan={{ md: 2 }}>
                    <InputField
                      label="Your Address"
                      name="address"
                      placeholder="1137 Williams Avenue"
                    />
                  </GridItem>
                  <GridItem>
                    <InputField
                      label="ZIP Code"
                      name="zipCode"
                      placeholder="10001"
                    />
                  </GridItem>
                  <GridItem>
                    <InputField
                      label="City"
                      name="city"
                      placeholder="New York"
                    />
                  </GridItem>
                  <GridItem>
                    <InputField
                      label="Country"
                      name="country"
                      placeholder="United States"
                    />
                  </GridItem>
                </Grid>
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
                  rowGap={{ base: '4', md: '6' }}
                  columnGap={{ md: '4' }}
                  flexDirection={{ base: 'column', md: 'row' }}
                >
                  <Text flex={{ md: 1 }} fontWeight={'bold'}>
                    Payment Method
                  </Text>
                  <CustomRadioButton formikProps={props} />
                </Flex>
                {props.values.paymentMethod === 'e-money' && (
                  <Grid
                    gridRowGap={{ base: '4', md: '6' }}
                    gridColumnGap={{ md: '4' }}
                    gridTemplateColumns={{
                      md: '1fr 1fr',
                    }}
                    mt="6"
                  >
                    <InputField
                      label="e-Money Number"
                      name="eMoneyNumber"
                      placeholder="238521993"
                    />
                    <InputField
                      label="e-Money PIN"
                      name="eMoneyPin"
                      placeholder="6891"
                    />
                  </Grid>
                )}
              </FormControl>
            </Box>
            <Box
              borderRadius={'lg'}
              px={{ base: '6', md: '33px' }}
              py={{ base: '8' }}
              bg={'aph.white'}
              minW={{ lg: '350px' }}
            >
              <Heading variant={'h6'}>Summary</Heading>
              <VStack
                as="ul"
                spacing={'6'}
                align={'stretch'}
                pt={{ base: '31px' }}
                pb={{ base: '8' }}
              >
                <CartItem />
                <CartItem />
                <CartItem />
              </VStack>
              <VStack align={'stretch'} mb={{ base: '6' }}>
                <CartSummary label="Total" price={5396} />
                <CartSummary label="Shipping" price={50} />
                <CartSummary label="Vat (included)" price={1079} />
              </VStack>
              <CartSummary
                label="Grand Total"
                price={5446}
                color="aph.primary.100"
              />
              <Button
                bg="aph.primary.100"
                color="aph.white"
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="1px"
                lineHeight="normal"
                borderRadius="none"
                w="full"
                h="12"
                mt={{ base: '8' }}
                _hover={{
                  backgroundColor: 'aph.primary.50',
                }}
                type="submit"
              >
                CONTINUE & PAY
              </Button>
            </Box>
          </Flex>
        </Form>
      )}
    </Formik>
  );
}
