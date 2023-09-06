'use client';
import { FormValues } from '@/utils/types';
import {
  Box,
  HStack,
  RadioGroup,
  UseRadioProps,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import { FormikProps } from 'formik';
import { ReactNode } from 'react';

interface RadioCardProps extends UseRadioProps {
  children: ReactNode;
  formikProps: FormikProps<FormValues>;
  value: string;
}

function RadioCard(props: RadioCardProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const radiobutton = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...radiobutton}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
        onClick={() => props.formikProps.setFieldValue('stack', props.children)}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default function CustomRadioButton({
  formikProps,
}: {
  formikProps: FormikProps<FormValues>;
}) {
  const options = ['react', 'vue', 'svelte'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'stack',
    defaultValue: formikProps.initialValues.stack,
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack as={RadioGroup} {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard
            key={value}
            {...radio}
            formikProps={formikProps}
            value={value}
          >
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
