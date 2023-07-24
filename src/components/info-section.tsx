import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@/utils/chakra-components';

const InfoSection = () => {
  return (
    <Flex align="center" justify="space-between">
      <VStack w="445px" spacing="32px">
        <Heading as="h2" variant="h2">
          Bringing you the{' '}
          <Box as="span" color="aph.primary.100">
            best
          </Box>{' '}
          audio gear
        </Heading>
        <Text>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </VStack>
      <Box borderRadius="lg" overflow="hidden">
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="best gear"
        />
      </Box>
    </Flex>
  );
};

export default InfoSection;
