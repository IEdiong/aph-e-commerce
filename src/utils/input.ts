import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  field: {
    width: '100%',
    minWidth: 0,
    height: '56px',
    paddingInline: '6',
    outline: 0,
    borderRadius: '8px',
    border: '1px solid',
    lineHeight: 'normal',
    position: 'relative',
  },
});

const variantOutline = definePartsStyle(() => {
  return {
    field: {
      fontFamily: 'inherit',
      fontSize: 'sm',
      fontWeight: 'bold',
      borderColor: '#CFCFCF',
      backgroundColor: '#FFFFFF',
      caretColor: '#D87D4A',
      _placeholder: {
        fontSize: 'sm',
        fontWeight: 'bold',
        opacity: '0.5',
      },
      _focusVisible: {
        borderColor: 'aph.primary.100',
        boxShadow: 'none',
      },
      _invalid: {
        borderColor: '#CD2C2C',
        boxShadow: '0 0 0 1px #CD2C2C',
      },
    },
  };
});

const variants = {
  outline: variantOutline,
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'outline',
  },
});
