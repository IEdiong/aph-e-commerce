import {
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from '@/utils/chakra-components';

const InTheBox = () => {
  return (
    <VStack as="section" spacing="32px" align="flex-start">
      <Heading as="h2" variant="h3">
        in the box
      </Heading>
      <List display="flex" flexDir="column" rowGap={2}>
        <ListItem display="flex" columnGap="21px">
          <Text as="span" color="aph.primary.100" w="18px">
            1x
          </Text>
          <Text opacity="0.5">Headphone Unit</Text>
        </ListItem>
        <ListItem display="flex" columnGap="21px">
          <Text as="span" color="aph.primary.100" w="18px">
            2x
          </Text>
          <Text opacity="0.5">Replacement Earcups</Text>
        </ListItem>
        <ListItem display="flex" columnGap="21px">
          <Text as="span" color="aph.primary.100" w="18px">
            1x
          </Text>
          <Text opacity="0.5">User Manual</Text>
        </ListItem>
        <ListItem display="flex" columnGap="21px">
          <Text as="span" color="aph.primary.100" w="18px">
            1x
          </Text>
          <Text opacity="0.5">3.5mm 5m Audio Cable</Text>
        </ListItem>
        <ListItem display="flex" columnGap="21px">
          <Text as="span" color="aph.primary.100" w="18px">
            1x
          </Text>
          <Text opacity="0.5">Travel Bag</Text>
        </ListItem>
      </List>
    </VStack>
  );
};

export default InTheBox;
