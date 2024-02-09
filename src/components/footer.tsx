import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Stack,
  Text,
} from '@/utils/chakra-components';
import NavItem from './nav-item';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';
import { ReactNode } from 'react';

export default function Footer() {
  return (
    <Box
      as="footer"
      color={'aph.white'}
      bg={'aph.black.500'}
      textAlign={{ base: 'center', md: 'left' }}
    >
      <Container
        w="89%"
        maxW="container.lg"
        px="0"
        pt="75px"
        pb="12"
        position="relative"
        sx={{
          '&::before': {
            content: `""`,
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '101px',
            height: '4px',
            backgroundColor: 'aph.primary.100',
          },
          '@media (min-width: 736px)': {
            '&::before': {
              left: '0%',
              transform: 'translateX(0%)',
            },
          },
        }}
      >
        <Flex
          align={{ base: 'center', md: 'flex-start', lg: 'center' }}
          justify="space-between"
          rowGap={'32px'}
          pos="relative"
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Image src="/assets/shared/desktop/logo.svg" alt="" />
          <Stack
            flexDirection={{ base: 'column', md: 'row' }}
            as="ul"
            spacing={{ base: '4', md: '34px' }}
            justify="center"
            listStyleType="none"
          >
            <NavItem text="home" />
            <NavItem text="Headphones" to="/headphones" />
            <NavItem text="Speakers" to="/speakers" />
            <NavItem text="Earphones" to="/earphones" />
          </Stack>
        </Flex>
        <Box mt={{ base: '12', md: '32px', lg: '36px' }}>
          <Text w={{ base: 'full', lg: '49%' }} opacity="0.5">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </Text>
        </Box>
        <Flex
          mt={{ base: '12', md: '56px' }}
          flexDirection={{ base: 'column', md: 'row' }}
          justify={'space-between'}
          align={'center'}
          rowGap={'12'}
        >
          <Box>
            <Text opacity="0.5">Copyright 2021. All Rights Reserved</Text>
          </Box>
          <Flex
            w="104px"
            maxH="24px"
            justify={'space-between'}
            align={'center'}
            position={{ base: 'relative', lg: 'absolute' }}
            bottom={{ lg: '136px' }}
            right={{ lg: '0' }}
          >
            <SocialLink icon={<FacebookIcon boxSize={'24px'} />} />
            <SocialLink icon={<TwitterIcon boxSize={'24px'} />} />
            <SocialLink icon={<InstagramIcon boxSize={'24px'} />} />
          </Flex>
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
