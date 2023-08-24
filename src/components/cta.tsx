'use client';
import { Box, Link, useStyleConfig } from '@/utils/chakra-components';
import { LinkProps } from '@chakra-ui/react';
import { FC } from 'react';

interface CtaProps extends LinkProps {
  variant?: string;
  to?: string;
}

const Cta: FC<CtaProps> = ({ variant, to = '/', ...rest }) => {
  const styles = useStyleConfig('Cta', { variant });
  return (
    <Box __css={styles} {...rest}>
      <Link
        href={to}
        paddingBlock={'15px'}
        paddingInline={'20px'}
        display={'inherit'}
        lineHeight={'normal'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        {rest.children}
      </Link>
    </Box>
  );
};

export default Cta;
