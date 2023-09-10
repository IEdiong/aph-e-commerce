import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    mt: '92px',
    bg: 'blackAlpha.400', //change the background
  },
  dialog: {
    borderRadius: 'lg',
    marginInlineStart: 'auto',
    marginBlockStart: '8',
  },
  dialogContainer: {
    marginBlockStart: '92px',
    display: 'block',
    width: '95%',
    maxWidth: {
      md: 'container.md',
      lg: 'container.lg',
    },
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
