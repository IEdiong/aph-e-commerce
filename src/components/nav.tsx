import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
} from '@/utils/chakra-components';
import NavItem from './nav-item';
import { HamburgerIcon } from './icons';

const NavBar = ({
  bgColor = 'transparent',
}: {
  bgColor?: 'transparent' | 'aph.black.900';
}) => {
  return (
    <Box as="nav" bgColor={bgColor} color="aph.white">
      <Container
        w="89%"
        maxW={{ lg: 'container.lg' }}
        px="0"
        py={'32px'}
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
          <HStack spacing={'42px'}>
            <Button
              p="0"
              borderRadius="none"
              minW="max-content"
              h="max-content"
              bg="transparent"
              _hover={{
                bg: 'transparent',
              }}
              display={{ base: 'inline-flex', lg: 'none' }}
            >
              <HamburgerIcon boxSize={'16px'} />
            </Button>
            <Image src="/assets/shared/desktop/logo.svg" alt="" />
          </HStack>
          <HStack
            as="ul"
            spacing="34px"
            justify="center"
            listStyleType="none"
            justifySelf="center"
            pos="absolute"
            left="50%"
            transform="translateX(-50%)"
            display={{ base: 'none', lg: 'flex' }}
          >
            <NavItem text="home" />
            <NavItem text="Headphones" to="/headphones" />
            <NavItem text="Speakers" to="/speakers" />
            <NavItem text="Earphones" to="/earphones" />
          </HStack>
          <Link href="/">
            <Image src="/assets/shared/desktop/icon-cart.svg" alt="" />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
