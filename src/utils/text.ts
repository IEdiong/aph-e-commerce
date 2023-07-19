import { defineStyleConfig } from '@chakra-ui/react';

const Text = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontSize: 'md',
    fontWeight: 'medium',
    lineHeight: '25px',
  },
  // Styles for the visual style variations
  variants: {
    overline: {
      color: 'aph.primary.100',
      fontSize: 'sm',
      fontWeight: 'normal',
      textTransform: 'uppercase',
      lineHeight: 'normal',
      letterSpacing: '10px',
    },
    'sub-title': {
      color: 'aph.primary.100',
      fontSize: 'xs',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});

export default Text;
