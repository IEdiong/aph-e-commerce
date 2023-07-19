import { defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'inherit',
    lineHeight: 'normal',
  },
  // Styles for the visual style variations
  variants: {
    h1: {
      fontSize: '6xl',
      lineHeight: '58px',
      letterSpacing: '2px',
    },
    h2: {
      fontSize: '5xl',
      lineHeight: '44px',
      letterSpacing: '1.429px',
    },
    h3: {
      fontSize: '3xl',
      lineHeight: '36px',
      letterSpacing: '1.143px',
    },
    h4: {
      fontSize: '2xl',
      letterSpacing: '2px',
    },
    h5: {
      fontSize: 'xl',
      letterSpacing: '1.714px',
    },
    h6: {
      fontSize: 'lg',
      letterSpacing: '1.286px',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: 'h2',
  },
});

export default Heading;
