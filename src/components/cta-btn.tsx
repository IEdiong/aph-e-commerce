'use client';
import { Button } from '@/utils/chakra-components';
import { ButtonProps, forwardRef } from '@chakra-ui/react';

interface TCtaProps extends ButtonProps {
  text: string;
}

const CtaBtn = forwardRef<TCtaProps, 'button'>((props, ref) => {
  return (
    <Button
      paddingBlock="15px"
      paddingInline="20px"
      lineHeight="1.5"
      fontSize="xs"
      fontWeight="bold"
      bg="aph.primary.100"
      color="aph.white"
      borderRadius="none"
      minW="160px"
      h="12"
      textTransform="uppercase"
      _hover={{
        textDecoration: 'none',
        bg: 'aph.primary.50',
      }}
      ref={ref}
      {...props}
    >
      {props.text}
    </Button>
  );
});

export default CtaBtn;
