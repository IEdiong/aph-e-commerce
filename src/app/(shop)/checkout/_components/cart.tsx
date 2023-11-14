import { HStack, Image, VStack, Text } from '@/utils/chakra-components';

type TCartItemProps = {
  productPrice: number;
  productName: string;
  productQuantity: number;
  productUrl: string;
};

export function CartItem({
  productName,
  productPrice,
  productQuantity,
  productUrl,
}: TCartItemProps) {
  return (
    <HStack as="li" justify={'space-between'} align={'flex-start'}>
      <HStack spacing={'4'}>
        <Image
          src={productUrl}
          width={'64px'}
          height={'64px'}
          borderRadius={'lg'}
          alt="zx9-speaker"
        />
        <VStack align={'flex-start'} spacing={'0'}>
          <Text fontWeight={'bold'} textTransform={'uppercase'}>
            {productName.split(' ')[0]}
          </Text>
          <Text opacity={'0.5'} fontSize={'14px'} fontWeight={'bold'}>
            $ {productPrice.toLocaleString()}
          </Text>
        </VStack>
      </HStack>
      <Text fontWeight={'bold'} opacity={'0.5'} paddingBlockStart={'6px'}>
        x{productQuantity}
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
