import {
  Heading,
  List,
  ListItem,
  Stack,
  Text,
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
    <Stack
      flexDirection={{ base: 'column', md: 'row', lg: 'column' }}
      as="section"
      spacing={{ base: '6', md: '32px' }}
      align="flex-start"
      minW={{ lg: '350px' }}
    >
      <Heading as="h2" variant="h3" flex={{ base: 1, lg: 0 }}>
        in the box
      </Heading>
      <List
        display="flex"
        flexDir="column"
        rowGap={2}
        flex={{ base: 1, lg: 0 }}
      >
        {includes.map(({ quantity, item }, idx) => (
          <ListItem key={idx} display="flex" columnGap="21px">
            <Text as="span" color="aph.primary.100" w="18px">
              {quantity}x
            </Text>
            <Text opacity="0.5">{item}</Text>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default InTheBox;
