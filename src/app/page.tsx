import { Box, Heading, VStack } from '@/utils/chakra-components';

export default function Home() {
  return (
    <Box as='main'>
      <VStack w='516px' spacing='40px' align={'flex-start'}>
        <Heading variant={'h1'} as='h1'>
          Morbi interdum mollis sapien
        </Heading>
        <Heading variant={'h2'} as='h2'>
          Donec nec justo eget felis facilisis
        </Heading>
        <Heading variant={'h3'} as='h3'>
          Nunc sem lacus accum
        </Heading>
        <Heading variant={'h4'} as='h4'>
          interdum consectetuer
        </Heading>
        <Heading variant={'h5'} as='h5'>
          nascetur ridiculus mus
        </Heading>
        <Heading variant={'h6'} as='h6'>
          natoque penatibus et
        </Heading>
      </VStack>
    </Box>
  );
}
