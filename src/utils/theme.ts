import { extendTheme } from '@chakra-ui/react';
import Heading from './heading';

// Colors
const colors = {
  aph: {
    primary: {
      50: '#FBAF85',
      100: '#D87D4A',
    },
    neutral: {
      50: '#FAFAFA',
      100: '#F1F1F1',
    },
    white: '#FFFFFF',
    black: {
      500: '#101010',
      900: '#000000',
    },
  },
};

// Font Sizes
const fontSizes = {
  xs: '0.8125rem',
  sm: '0.875rem',
  md: '0.9375rem',
  lg: '1.125rem',
  xl: '1.5rem',
  '2xl': '1.75rem',
  '3xl': '2rem',
  '4xl': '2.25rem',
  '5xl': '2.5rem',
  '6xl': '3.5rem',
};

// Components
const components = {
  // Heading
  Heading: {
    variants: {},
  },
};

export const theme = extendTheme({
  colors,
  fontSizes,
  components: {
    Heading,
  },
  config: {
    cssVarPrefix: 'aph',
  },
});
