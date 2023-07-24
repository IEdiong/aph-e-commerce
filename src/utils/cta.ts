import { defineStyleConfig } from '@chakra-ui/react';

const Cta = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontWeight: 'bold',
    lineHeight: 'normal',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textAlign: 'center',
    borderRadius: 'none',
    display: 'inline-block',
    transition: 'background-color ease-in-out .4s',
  },
  // Styles for the visual style variations
  variants: {
    solid: {
      fontSize: 'xs',
      bg: 'aph.primary.100',
      color: 'aph.white',
      _hover: {
        bg: 'aph.primary.50',
      },
    },
    outline: {
      fontSize: 'xs',
      bg: 'transparent',
      color: 'aph.black.900',
      borderColor: 'aph.black.900',
      border: '1px solid',
      _hover: {
        bg: 'aph.black.900',
        color: 'aph.white',
      },
    },
    black: {
      fontSize: 'xs',
      bg: 'aph.black.900',
      color: 'aph.white',
      _hover: {
        bg: '#4C4C4C',
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: 'solid',
  },
});

export default Cta;
