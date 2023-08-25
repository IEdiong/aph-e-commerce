import { Box, Flex, Heading, Image, VStack } from '@/utils/chakra-components';
import ShopLink from './shop-link';

const features = [
  {
    id: 1,
    title: 'HEADPHONES',
    to: '/headphones',
    imgUrl: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
  },
  {
    id: 2,
    title: 'SPEAKERS',
    to: '/speakers',
    imgUrl: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
  },
  {
    id: 3,
    title: 'EARPHONES',
    to: '/earphones',
    imgUrl: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
  },
];

const FeatureProducts = () => {
  return (
    <Flex
      as="section"
      columnGap={{ md: '10px', lg: '30px' }}
      rowGap={'4'}
      justify="space-between"
      align="baseline"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          to={feature.to}
          imgUrl={feature.imgUrl}
        />
      ))}
    </Flex>
  );
};

function FeatureCard({
  title,
  to,
  imgUrl,
}: {
  title: string;
  to: string;
  imgUrl: string;
}) {
  return (
    <VStack
      align="center"
      spacing="15px"
      w="full"
      h={{ base: '217px', md: '245px', lg: '284px' }}
      pos="relative"
    >
      <Box
        w={{ base: '150px', md: '80%', lg: '65%' }}
        pos="absolute"
        zIndex="10"
      >
        <Image src={imgUrl} alt="" />
      </Box>
      <VStack
        pos="absolute"
        bottom="0px"
        left="0px"
        width="100%"
        h={{ base: '165px', lg: '204px' }}
        bg="#F1F1F1"
        borderRadius="lg"
        pb="30px"
        spacing="15px"
        justify="flex-end"
      >
        <Heading as="h6" variant={{ base: 'h6-sm', lg: 'h6' }}>
          {title}
        </Heading>
        <ShopLink to={to} w="160px">
          Shop
        </ShopLink>
      </VStack>
    </VStack>
  );
}

export default FeatureProducts;
