'use client';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

export interface FormValues {
  firstname: string;
  lastname: string;
  paymentMethod: string;
}

export default function WahalaPage() {
  const toast = useToast();
  const id = 'form-submit-success';

  return (
    <Box py="8">
      <Container maxW={{ base: '255px', lg: '255px' }}>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            paymentMethod: 'e-money',
          }}
          onSubmit={(values) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
            }, 1000);
            if (!toast.isActive(id)) {
              toast({
                id,
                status: 'success',
                isClosable: true,
                position: 'top-right',
                description: 'You form has been submitted successfully',
                duration: 5000,
              });
            }
          }}
        >
          {() => (
            <Form>
              <Field name="firstname">
                {({ field }: { field: any }) => (
                  <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input {...field} placeholder="First name" />
                  </FormControl>
                )}
              </Field>
              <Field name="lastname">
                {({ field }: { field: any }) => (
                  <FormControl mt="4">
                    <FormLabel>Last name</FormLabel>
                    <Input {...field} placeholder="Last name" />
                  </FormControl>
                )}
              </Field>

              {/* <CustomRadio
                data={['react', 'vue', 'svelte']}
                formikProps={props}
              /> */}

              {/* <CustomRadioButton formikProps={props} /> */}
              <Button mt="8" type="submit" colorScheme="twitter">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}
