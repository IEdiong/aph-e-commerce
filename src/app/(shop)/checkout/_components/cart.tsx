import { HStack, Image, VStack, Text } from '@/utils/chakra-components';

export function CartItem() {
  return (
    <HStack as="li" justify={'space-between'}>
      <HStack spacing={'4'}>
        <Image
          src="/assets/cart/image-zx9-speaker.jpg"
          width={'64px'}
          height={'64px'}
          borderRadius={'lg'}
          alt="zx9-speaker"
        />
        <VStack align={'flex-start'} spacing={'0'}>
          <Text fontWeight={'bold'} textTransform={'uppercase'}>
            zx9
          </Text>
          <Text opacity={'0.5'} fontSize={'14px'} fontWeight={'bold'}>
            $ 2,999
          </Text>
        </VStack>
      </HStack>
      <Text fontWeight={'bold'} opacity={'0.5'}>
        x1
      </Text>
    </HStack>
  );
}

export function CartSummary({
  label,
  price,
  color = 'aph.black.900',
}: {
  label: string;
  price: number;
  color?: string;
}) {
  return (
    <HStack justify={'space-between'}>
      <Text opacity={'0.5'} textTransform={'uppercase'}>
        {label}
      </Text>
      <Text
        fontWeight={'bold'}
        fontSize={'lg'}
        lineHeight={'normal'}
        color={color}
      >
        $ {price.toLocaleString()}
      </Text>
    </HStack>
  );
}
