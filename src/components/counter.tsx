import { Box, Flex, Text } from '@/utils/chakra-components';

interface CounterProps {
  increment: () => void;
  decrement: () => void;
  currentCount: number;
}
const Counter = ({
  increment,
  decrement,
  currentCount: count,
}: CounterProps) => {
  return (
    <Flex columnGap="20px" px="15.5px" bg="aph.neutral.100" align="center">
      <Box as="button" opacity="0.25" w="4" onClick={decrement}>
        -
      </Box>
      <Text w="4" textAlign="center">
        {count}
      </Text>
      <Box as="button" opacity="0.25" w="4" onClick={increment}>
        +
      </Box>
    </Flex>
  );
};

export default Counter;