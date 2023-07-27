import { Box, Flex, Heading, Image, VStack } from '@/utils/chakra-components';
import ShopLink from './shop-link';

const FeatureProducts = () => {
  return (
    <Flex
      as="section"
      columnGap="30px"
      justify="space-between"
      align="baseline"
    >
      <VStack align="center" spacing="15px" w="full" h="284px" pos="relative">
        <Box w="65%" pos="absolute" zIndex="10">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt=""
          />
        </Box>
        <VStack
          pos="absolute"
          bottom="0px"
          left="0px"
          width="100%"
          h="204px"
          bg="#F1F1F1"
          borderRadius="lg"
          pb="30px"
          spacing="15px"
          justify="flex-end"
        >
          <Heading as="h6" variant="h6">
            HEADPHONES
          </Heading>
          <ShopLink to="/headphones" w="160px">
            Shop
          </ShopLink>
        </VStack>
      </VStack>
      <VStack align="center" spacing="15px" w="full" h="284px" pos="relative">
        <Box w="65%" pos="absolute" zIndex="10">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt=""
          />
        </Box>
        <VStack
          pos="absolute"
          bottom="0px"
          left="0px"
          width="100%"
          h="204px"
          bg="#F1F1F1"
          borderRadius="lg"
          pb="30px"
          spacing="15px"
          justify="flex-end"
        >
          <Heading as="h6" variant="h6">
            SPEAKERS
          </Heading>
          <ShopLink to="/speakers" w="160px">
            Shop
          </ShopLink>
        </VStack>
      </VStack>
      <VStack align="center" spacing="15px" w="full" h="274px" pos="relative">
        <Box w="65%" pos="absolute" zIndex="10">
          <Image
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt=""
          />
        </Box>
        <VStack
          pos="absolute"
          bottom="0px"
          left="0px"
          width="100%"
          h="204px"
          bg="#F1F1F1"
          borderRadius="lg"
          pb="30px"
          spacing="15px"
          justify="flex-end"
        >
          <Heading as="h6" variant="h6">
            EARPHONES
          </Heading>
          <ShopLink to="/" w="160px">
            Shop
          </ShopLink>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default FeatureProducts;
