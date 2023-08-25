import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Text,
} from '@/utils/chakra-components';
import NavItem from './nav-item';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';
import { ReactNode } from 'react';

export default function Footer() {
  return (
    <Box as="footer" color={'aph.white'} bg={'aph.black.500'}>
      <Container
        w="89%"
        maxW="container.lg"
        px="0"
        py="75px"
        position="relative"
        _before={{
          content: "''",
          position: 'absolute',
          top: '0',
          left: '0',
          width: '101px',
          height: '4px',
          backgroundColor: 'aph.primary.100',
        }}
      >
        <Flex align="center" justify="space-between" pos="relative">
          <Image src="/assets/shared/desktop/logo.svg" alt="" />
          <HStack as="ul" spacing="34px" justify="center" listStyleType="none">
            <NavItem text="home" />
            <NavItem text="Headphones" to="/headphones" />
            <NavItem text="Speakers" to="/speakers" />
            <NavItem text="Earphones" to="/earphones" />
          </HStack>
        </Flex>
        <Box mt="36px">
          <Text w="49%" opacity="0.5">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </Text>
        </Box>
        <Box mt="56px">
          <Text opacity="0.5">Copyright 2021. All Rights Reserved</Text>
        </Box>
        <Flex
          w="104px"
          justify={'space-between'}
          align={'center'}
          position={'absolute'}
          bottom={'136px'}
          right={'0'}
        >
          <SocialLink icon={<FacebookIcon boxSize={'24px'} />} />
          <SocialLink icon={<TwitterIcon boxSize={'24px'} />} />
          <SocialLink icon={<InstagramIcon boxSize={'24px'} />} />
        </Flex>
      </Container>
    </Box>
  );
}

function SocialLink({ icon }: { icon: ReactNode }) {
  return (
    <Link
      href="/"
      transition="color .4s ease-out"
      _hover={{
        color: 'aph.primary.100',
      }}
      aria-label="facebook"
    >
      {icon}
    </Link>
  );
}
