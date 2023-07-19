import { defineStyleConfig } from '@chakra-ui/react';

const FormLabel = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: 'normal',
    marginBottom: '9px',
  },
  // The default `size` or `variant` values
  defaultProps: {},
});

export default FormLabel;
