import {
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from '@/utils/chakra-components';

interface IncludesItem {
  quantity: number;
  item: string;
}
interface IProps {
  includes: IncludesItem[];
}

const InTheBox = ({ includes }: IProps) => {
  return (
    <VStack as="section" spacing="32px" align="flex-start">
      <Heading as="h2" variant="h3">
        in the box
      </Heading>
      <List display="flex" flexDir="column" rowGap={2}>
        {includes.map(({ quantity, item }, idx) => (
          <ListItem key={idx} display="flex" columnGap="21px">
            <Text as="span" color="aph.primary.100" w="18px">
              {quantity}x
            </Text>
            <Text opacity="0.5">{item}</Text>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default InTheBox;
