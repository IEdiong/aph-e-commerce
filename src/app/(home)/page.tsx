import Cta from '@/components/cta';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import {
  Heading,
  Text,
  Container,
  Box,
  VStack,
  Grid,
  GridItem,
} from '@/utils/chakra-components';

export default function Home() {
  return (
    <Box as="main">
      <Container w="89%" maxW="container.lg" px="0">
        <Box
          mt={{ base: '40px', md: '96px', lg: '120px' }}
          mb={{ base: '120px', md: '96px', lg: '168px' }}
        >
          <FeatureProducts />
        </Box>
        <VStack spacing="12" align="stretch">
          <FeatureOne />
          <Grid
            columnGap="30px"
            rowGap="12"
            templateColumns={'repeat(2, 1fr)'}
            autoRows={{
              base: 'minmax(200px, auto)',
              md: 'minmax(320px, auto)',
            }}
          >
            <GridItem colSpan={2}>
              <GridItemOne />
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <GridItemTwo />
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <GridItemThree />
            </GridItem>
          </Grid>
        </VStack>
        <Box my={{ base: '120px', md: '96px', lg: '200px' }}>
          <InfoSection />
        </Box>
      </Container>
    </Box>
  );
}

function FeatureOne() {
  return (
    <Box
      as="section"
      borderRadius="lg"
      bgColor={'aph.primary.100'}
      bgImage={{
        base: `
              url('/assets/home/mobile/image-speaker-zx9.png'),
              url('/assets/home/desktop/pattern-circles.svg')
              `,
        md: `
            url('/assets/home/tablet/image-speaker-zx9.png'),
            url('/assets/home/desktop/pattern-circles.svg')
              `,
        lg: `
            url('/assets/home/desktop/image-speaker-zx9.png'),
            url('/assets/home/desktop/pattern-circles.svg')
            `,
      }}
      bgRepeat={'no-repeat, no-repeat'}
      bgSize={{
        base: '172.248px 207px, 558px 558px',
        md: '197.212px 237px, 944px 944px',
        lg: ' 410px 493px, 944px 944px',
      }}
      bgPos={{
        base: 'top 55px center, top -121px center',
        md: 'top 52px center, top -288px center',
        lg: 'bottom -15px left 117px, top -36px left -149px',
      }}
      h={{ base: '600px', md: 'full', lg: '560px' }}
      w="full"
    >
      <Box
        color="aph.white"
        w={{ lg: '40%' }}
        ms="auto"
        pt={{ base: '294px', md: '353px', lg: '133px' }}
        pb={{ base: '55px', md: '124px' }}
        h="full"
        textAlign={{ base: 'center', lg: 'left' }}
      >
        <VStack
          mx={{ base: 'auto', lg: '0px' }}
          w={{ base: '280px', md: '350px' }}
          spacing="6"
        >
          <Heading as="h2" variant={{ base: 'h1-sm', md: 'h1' }}>
            ZX9 SPEAKER
          </Heading>
          <Text opacity="0.75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
        </VStack>
        <Cta to="/speakers/6" variant="black" w="160px" mt="40px">
          See Product
        </Cta>
      </Box>
    </Box>
  );
}

function GridItemOne() {
  return (
    <Box
      w="full"
      pl={{ base: '6', md: '62px', lg: '95px' }}
      py="101px"
      borderRadius="lg"
      bgColor="aph.neutral.100"
      bgPos={'center'}
      bgSize={'cover'}
      bgImage={{
        base: "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        md: "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        lg: "url('/assets/home/desktop/image-speaker-zx7.jpg')",
      }}
    >
      <Heading as="h2" variant="h4">
        ZX7 SPEAKER
      </Heading>
      <Cta to="/speakers/5" variant="outline" w="160px" mt="32px">
        See Product
      </Cta>
    </Box>
  );
}

function GridItemTwo() {
  return (
    <Box
      w="full"
      h="full"
      borderRadius="lg"
      bgColor="aph.black.900"
      bgSize={{
        base: 'cover',
      }}
      bgPos={'center'}
      bgImage={{
        base: `url('/assets/home/mobile/image-earphones-yx1.jpg')`,
        md: `url('/assets/home/tablet/image-earphones-yx1.jpg')`,
        lg: `url('/assets/home/desktop/image-earphones-yx1.jpg')`,
      }}
    ></Box>
  );
}

function GridItemThree() {
  return (
    <Box
      w="full"
      h="full"
      pl={{ base: '6', md: '42px', lg: '95px' }}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      borderRadius="lg"
      bgColor="aph.neutral.100"
    >
      <Heading as="h2" variant="h4">
        YX1 EARPHONES
      </Heading>
      <Cta to="/earphones/1" variant="outline" w="160px" mt="32px">
        See Product
      </Cta>
    </Box>
  );
}
{
  /* <Flex
        as="section"
        p="8"
        justify={'center'}
        align={'center'}
        flexDir="column"
        minH="100vh"
      >
        <Heading mt="-12">Work in progress...</Heading>
        <Text>
          Check out the style guide{' '}
          <Link href="/style-guide" color={'aph.primary.100'}>
            here
          </Link>
        </Text>
      </Flex> */
}
