import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
} from '@/utils/chakra-components';

const NavBar = () => {
  return (
    <Box as="nav" bgColor="transparent" color="aph.white">
      <Container
        maxW={{ lg: 'container.lg' }}
        px="0"
        py={{ lg: '32px' }}
        pos={'relative'}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: 'full',
          height: '1px',
          backgroundColor: 'aph.white',
          opacity: 0.2,
        }}
      >
        <Flex align="center" justify="space-between" pos="relative">
          <Image src="/assets/shared/desktop/logo.svg" alt="" />
          <HStack
            as="ul"
            spacing="34px"
            justify="center"
            listStyleType="none"
            justifySelf="center"
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
          >
            <NavItem text="home" />
            <NavItem text="Headphones" />
            <NavItem text="Speakers" />
            <NavItem text="Earphones" />
          </HStack>
          <Link href="/">
            <Image src="/assets/shared/desktop/icon-cart.svg" alt="" />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

const NavItem = ({ text, to = '/' }: { text: string; to?: string }) => {
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
};

export default NavBar;
