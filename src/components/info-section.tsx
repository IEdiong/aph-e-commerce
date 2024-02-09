import { Box, Flex, Heading, Text, VStack } from '@/utils/chakra-components';
import Picture from './picture';

const InfoSection = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      columnGap={{ lg: '30px' }}
      rowGap={{ base: '40px', md: '63px' }}
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <Box
        borderRadius="lg"
        overflow="hidden"
        order={{ base: 0, lg: 1 }}
        flex={1}
      >
        <Picture
          imgSmUrl="/assets/shared/mobile/image-best-gear.jpg"
          imgMdUrl="/assets/shared/tablet/image-best-gear.jpg"
          imgLgUrl="/assets/shared/desktop/image-best-gear.jpg"
          alt=""
        />
      </Box>
      <Box flex={1} order={{ base: 1, lg: 0 }}>
        <VStack
          w={{ md: '573px', lg: '445px' }}
          spacing="32px"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Heading as="h2" variant={{ base: 'h2-sm', md: 'h2' }}>
            Bringing you the{' '}
            <Box as="span" color="aph.primary.100">
              best
            </Box>{' '}
            audio gear
          </Heading>
          <Text opacity={'0.5'}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default InfoSection;
