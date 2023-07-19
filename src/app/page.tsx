import { Box, Heading, Text, Link, Flex } from '@/utils/chakra-components';

export default function Home() {
  return (
    <Flex
      as='main'
      p='8'
      justify={'center'}
      align={'center'}
      flexDir='column'
      minH='100vh'
    >
      <Heading mt='-12'>Work in progress...</Heading>
      <Text>
        Check out the style guide{' '}
        <Link href='/style-guide' color={'aph.primary.100'}>
          here
        </Link>
      </Text>
    </Flex>
  );
}
