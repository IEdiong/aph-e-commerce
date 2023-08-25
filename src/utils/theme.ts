import { extendTheme } from '@chakra-ui/react';
import Heading from './heading';
import Text from './text';
import Cta from './cta';
import FormLabel from './form-label';
import { inputTheme } from './input';
import Link from './link';
import Container from './container';

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
      300: '#0E0E0E',
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

// Container Size
const sizes = {
  container: {
    sm: '327px',
    md: '689px',
    lg: '1110px',
  },
};

// Breakpoint Size
const breakpoints = {
  base: '0em',
  md: '46em', // tablet from 736px
  lg: '78em', // desktop from 1248px
};

export const theme = extendTheme({
  colors,
  fontSizes,
  sizes,
  breakpoints,
  components: {
    Heading,
    Text,
    Cta,
    FormLabel,
    Link,
    Input: inputTheme,
    Container,
  },
  config: {
    cssVarPrefix: 'aph',
  },
});
