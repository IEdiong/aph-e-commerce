import FeatureProducts from '@/components/feature-products';
import {
  Heading,
  Text,
  Link,
  Flex,
  Container,
  Box,
} from '@/utils/chakra-components';

export default function Home() {
  return (
    <>
      <Container maxW="container.lg" px="0">
        <Box mt="120px" mb="168px">
          <FeatureProducts />
        </Box>
      </Container>
      <Flex
        as="main"
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
    </>
  );
}
