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
    marginInlineEnd: {
      base: '',
      lg: 'min(11vw, 14%)',
    },
    marginBlockStart: '8',
    width: {
      base: 'full',
      lg: '377px',
    },
  },
  dialogContainer: {
    marginBlockStart: '92px',
    marginInlineStart: 'auto',
    display: 'block',
    paddingInline: {
      base: '5',
      md: '10',
      lg: '0',
    },
  },
  header: {
    paddingBlockStart: '8',
    paddingBlockEnd: '0',
    paddingInline: '33px',
  },
  body: {
    paddingInline: '33px',
    paddingBlock: '0',
  },
  footer: {
    paddingBlockStart: '6',
    paddingBlockEnd: '31px',
    paddingInline: '33px',
    justifyContent: 'space-between',
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
