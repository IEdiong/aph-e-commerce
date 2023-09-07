'use client';
import { Field } from 'formik';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
} from '@/utils/chakra-components';

interface Props {
  label: string;
  name: string;
  placeholder: string;
}

function InputField({ label, name, placeholder }: Props) {
  return (
    <Field name={name}>
      {({ field, form }: { field: any; form: any }) => (
        <FormControl
          isInvalid={form.errors[name] && form.touched[name]}
          id={name}
        >
          <HStack justify={'space-between'} align={'center'} mb="8px">
            <FormLabel
              m="0"
              fontWeight={'bold'}
              color={form.errors[name] && form.touched[name] && 'red.500'}
            >
              {label}
            </FormLabel>
            {form.errors[name] && (
              <FormErrorMessage mt="0" fontWeight={'medium'}>
                {form.errors[name]}
              </FormErrorMessage>
            )}
          </HStack>
          <Input {...field} placeholder={placeholder} cursor={'pointer'} />
        </FormControl>
      )}
    </Field>
  );
}

export default InputField;
