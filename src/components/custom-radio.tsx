'use client';
import { FormValues } from '@/utils/types';
import {
  Box,
  RadioGroup,
  Text,
  UseRadioProps,
  VStack,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import { FormikProps } from 'formik';
import { CheckIcon } from './icons';

interface RadioCardProps extends UseRadioProps {
  children: string;
  formikProps: FormikProps<FormValues>;
  value: string;
}

function RadioCard(props: RadioCardProps) {
  const { state, getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const radiobutton = getRadioProps();

  return (
    <Box as="label" w="full" h="56px">
      <input {...input} hidden />
      <Box
        {...radiobutton}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        columnGap="4"
        _checked={{
          borderColor: 'aph.primary.100',
          borderWidth: '1px',
        }}
        _hover={{
          borderColor: 'aph.primary.100',
          borderWidth: '1px',
        }}
        h="full"
        px={4}
        onClick={() =>
          props.formikProps.setFieldValue('paymentMethod', props.value)
        }
      >
        <CheckIcon
          boxSize={'20px'}
          color={state.isChecked ? 'aph.primary.100' : 'transparent'}
        />
        <Text fontWeight={'bold'} fontSize={'sm'}>
          {props.children}
        </Text>
      </Box>
    </Box>
  );
}

export default function CustomRadioButton({
  formikProps,
}: {
  formikProps: FormikProps<FormValues>;
}) {
  const options = [
    {
      name: 'e-Money',
      value: 'e-money',
    },
    {
      name: 'Cash on Delivery',
      value: 'cash',
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'paymentMethod',
    defaultValue: formikProps.initialValues.paymentMethod,
  });

  const group = getRootProps();

  return (
    <VStack
      as={RadioGroup}
      {...group}
      spacing="4"
      align="flex-start"
      flex={{ md: 1 }}
    >
      {options.map((option) => {
        const radio = getRadioProps({ value: option.value });
        return (
          <RadioCard
            key={option.value}
            {...radio}
            formikProps={formikProps}
            value={option.value}
          >
            {option.name}
          </RadioCard>
        );
      })}
    </VStack>
  );
}
