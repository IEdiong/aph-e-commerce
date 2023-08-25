import { Box, Link } from '@/utils/chakra-components';

export default function NavItem({
  text,
  to = '/',
}: {
  text: string;
  to?: string;
}) {
  return (
    <Box
      as="li"
      transition="color .4s ease-out"
      _hover={{
        color: 'aph.primary.100',
      }}
    >
      <Link href={to}>{text}</Link>
    </Box>
  );
}
