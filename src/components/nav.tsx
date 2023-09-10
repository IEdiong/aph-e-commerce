'use client';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  useDisclosure,
} from '@/utils/chakra-components';
import NavItem from './nav-item';
import { HamburgerIcon } from './icons';
import { SlideFade } from '@chakra-ui/react';
import { Fragment } from 'react';
import FeatureProducts from './feature-products';
import CartIcon from './cart';

export default function NavBar({
  bgColor = 'transparent',
}: {
  bgColor?: 'transparent' | 'aph.black.900';
}) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="nav" bgColor={bgColor} color="aph.white" pos={'relative'}>
      <DesktopNav />
      <MobileNav onToggle={onToggle} isOpen={isOpen} />
    </Box>
  );
}

function DesktopNav() {
  return (
    <Container
      display={{ base: 'none', lg: 'block' }}
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
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt=""
            pos={{ base: 'absolute', md: 'relative' }}
            left={{ base: '50%', md: '' }}
            transform={{ base: 'translateX(-50%)', md: '' }}
          />
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
        <CartIcon />
      </Flex>
    </Container>
  );
}

function MobileNav({ onToggle, isOpen }: MobileNavProps) {
  return (
    <Fragment>
      <Container
        display={{ base: 'block', lg: 'none' }}
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
              onClick={onToggle}
            >
              <HamburgerIcon boxSize={'16px'} />
            </Button>
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt=""
              pos={{ base: 'absolute', md: 'relative' }}
              left={{ base: '50%', md: '' }}
              transform={{ base: 'translateX(-50%)', md: '' }}
            />
          </HStack>
          <Link href="/checkout">
            <Image src="/assets/shared/desktop/icon-cart.svg" alt="" />
          </Link>
        </Flex>
      </Container>
      <Box
        display={{ base: 'block', lg: 'none' }}
        zIndex={isOpen ? 12 : -12}
        pos={'absolute'}
        h={isOpen ? 'auto' : '0'}
        w="full"
        bg={'transparent'}
        color={'aph.black.900'}
      >
        <Box bg={'aph.white'} h={isOpen ? 'auto' : '0'}>
          <SlideFade in={isOpen}>
            <Container
              w="89%"
              maxW="container.lg"
              px="0"
              pt={{ base: '8', md: '56px' }}
              pb={{ base: '8', md: '67px' }}
            >
              <FeatureProducts />
            </Container>
          </SlideFade>
        </Box>
        <Box
          bg="aph.black.900"
          opacity="0.4"
          w="full"
          h={isOpen ? '100vh' : '0'}
          zIndex={11}
        ></Box>
      </Box>
    </Fragment>
  );
}

type MobileNavProps = {
  isOpen: boolean;
  onToggle: () => void;
};
