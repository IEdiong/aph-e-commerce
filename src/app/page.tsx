import Cta from '@/components/cta';
import FeatureProducts from '@/components/feature-products';
import {
  Heading,
  Text,
  Link,
  Flex,
  Container,
  Box,
  VStack,
} from '@/utils/chakra-components';

export default function Home() {
  return (
    <Box as="main">
      <Container maxW="container.lg" px="0">
        <Box mt="120px" mb="168px">
          <FeatureProducts />
        </Box>
        <VStack>
          <Box
            as="section"
            borderRadius="lg"
            bgColor={'aph.primary.100'}
            bgImage={`
            url('/assets/home/desktop/image-speaker-zx9.png'),
            url('/assets/home/desktop/pattern-circles.svg')
            `}
            bgRepeat={'no-repeat, no-repeat'}
            bgSize={' 410px 493px, 944px 944px'}
            bgPos={'bottom -15px left 117px, top -36px left -149px'}
            h="560px"
            w="full"
          >
            <Box
              color="aph.white"
              w="40%"
              ms="auto"
              pt="133px"
              pb="124px"
              h="full"
            >
              <VStack w="350px" spacing="6">
                <Heading as="h2" variant="h1">
                  ZX9 SPEAKER
                </Heading>
                <Text opacity="0.75">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </Text>
              </VStack>
              <Cta variant="black" w="160px" mt="40px">
                See Product
              </Cta>
            </Box>
          </Box>
        </VStack>
      </Container>
      <Flex
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
      </Flex>
    </Box>
  );
}
