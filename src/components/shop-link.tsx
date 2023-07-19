import { Link, Text } from '@/utils/chakra-components';
import { LinkProps } from '@chakra-ui/react';
import { ArrowIcon } from './icons';

interface ShopLinkProps extends LinkProps {
  to: string;
}

const ShopLink = ({ to, ...props }: ShopLinkProps) => {
  return (
    <Link
      href={to}
      display={'flex'}
      alignItems={'center'}
      columnGap={3}
      _hover={{
        textDecoration: 'none',
      }}
      className='link'
    >
      <Text
        fontSize={'xs'}
        opacity={'0.5'}
        textTransform={'uppercase'}
        sx={{
          '.link:hover &': {
            color: 'aph.primary.100',
            opacity: 1,
          },
        }}
      >
        {props.children}
      </Text>
      <ArrowIcon w='8px' h='12px' />
    </Link>
  );
};

export default ShopLink;

// unstyled: {
//   fontSize: 'xs',
//   bg: 'transparent',
//   color: 'aph.black.900',
//   opacity: 0.5,
//   borderColor: 'aph.black.900',
//   _hover: {
//     color: 'aph.primary.100',
//     opacity: 1,
//   },
// },
