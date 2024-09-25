import { Box, Flex, Text } from '@/utils/chakra-components';

interface CounterProps {
  increment: () => void;
  decrement: () => void;
  currentCount: number;
  paddingX?: string;
}
const Counter = ({
  increment,
  decrement,
  currentCount: count,
  paddingX = '15.5px',
}: CounterProps) => {
  return (
    <Flex
      columnGap="20px"
      px={paddingX}
      bg="aph.neutral.100"
      align="center"
      minH={10}
    >
      <Box
        as="button"
        opacity="0.25"
        w="4"
        fontWeight={'bold'}
        transition={'color 0.2s linear'}
        _hover={{
          color: count > 1 ? 'aph.primary.100' : 'inherit',
          opacity: count > 1 ? '1' : '0.25',
        }}
        onClick={decrement}
      >
        -
      </Box>
      <Text w="4" textAlign="center">
        {count}
      </Text>
      <Box
        as="button"
        opacity="0.25"
        w="4"
        fontWeight={'bold'}
        transition={'color 0.2s linear'}
        _hover={{
          color: 'aph.primary.100',
          opacity: '1',
        }}
        onClick={increment}
      >
        +
      </Box>
    </Flex>
  );
};

export default Counter;
