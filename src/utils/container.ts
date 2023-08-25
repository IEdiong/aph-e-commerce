import { defineStyleConfig } from '@chakra-ui/react';

const Container = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    width: '89%',
    paddingInline: '0',
    maxWidth: {
      base: 'container.sm',
      md: 'container.md',
      lg: 'container.lg',
    },
  },
});

export default Container;
