import { defineStyleConfig } from '@chakra-ui/react';

const Link = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'inherit',
    fontSize: 'xs',
    lineHeight: '25px',
    letterSpacing: '2px',
    _hover: {
      textDecoration: 'none',
    },
  },
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});

export default Link;
