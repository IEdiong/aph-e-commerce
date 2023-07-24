'use client';
import { Box, Link, useStyleConfig } from '@/utils/chakra-components';
import { LinkProps } from '@chakra-ui/react';
import { FC } from 'react';

interface CtaProps extends LinkProps {
  variant?: string;
}

const Cta: FC<CtaProps> = ({ variant, ...rest }) => {
  const styles = useStyleConfig('Cta', { variant });
  return (
    <Box __css={styles} {...rest}>
      <Link
        href="/"
        paddingBlock={'15px'}
        display={'inherit'}
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

// display="flex"
// borderWidth="1px"
// py={{ base: 3, md: '13px', lg: 4 }}
// px="4"
// bg={props.bgColor ? 'vfc.white' : props.bgColor}
// justifyContent="center"
// _hover={{
//   textDecoration: 'none',
//   backgroundColor: 'gray.100',
// }}
