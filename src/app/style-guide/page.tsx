import Cta from '@/components/cta';
import ShopLink from '@/components/shop-link';
import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Flex,
  Input,
} from '@/utils/chakra-components';

export default function DesignSystem() {
  return (
    <Box as='main' p='8'>
      <Flex justify={'flex-start'} columnGap={'200px'}>
        <Box>
          <VStack as='section' w='516px' spacing='40px' align={'flex-start'}>
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
          <VStack as='section' w='516px' align={'flex-start'} mt='40px'>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros
              pede semper est, vitae luctus metus libero eu augue. Morbi purus
              libero, faucibus adipiscing, commodo quis, gravida id, est. Sed
              lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
              felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
              euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
              arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum
              mollis sapien. Sed ac risus. Phasellus lacinia, magna a
              ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
              libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
              varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
              Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis
              eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare
              a, lacinia eu, vulputate vel, nisl. Suspendisse mauris. Fusce
              accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper
              vehicula. Integer adipiscing risus a sem. Nullam quis massa sit
              amet nibh viverra malesuada. Nunc sem lacus, accumsan quis,
              faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus.
              Integer sagittis. Vivamus a mauris eget arcu gravida tristique.
              Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est. Ut
              convallis, sem sit amet interdum consectetuer, odio augue aliquam
              leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet
              metus fermentum posuere. Morbi sit amet nulla sed dolor elementum
              imperdiet. Quisque fermentum. Cum sociis natoque penatibus et
              magnis xdis parturient montes, nascetur ridiculus mus.
              Pellentesque adipiscing eros ut libero. Ut condimentum mi vel
              tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida
              convallis.
            </Text>
            <Text variant={'overline'} as='span'>
              LOREM IPSUM
            </Text>
            <Text variant={'sub-title'} as='span'>
              Fusce ut est sed dolor gravida convallis
            </Text>
          </VStack>
        </Box>
        <Box flexShrink={1} flexGrow={1}>
          <Box as='section'>
            <Heading mb='8'>Buttons</Heading>
            <HStack spacing={4} align={'center'}>
              <Cta variant='solid' w='160px'>
                See Product
              </Cta>
              <Cta variant='outline' w='160px'>
                See Product
              </Cta>
              <ShopLink to='/' w='160px'>
                Shop
              </ShopLink>
            </HStack>
          </Box>
          <Box as='section' mt='8'>
            <Heading mb='8'>FORM ELEMENTS</Heading>
            <HStack>
              <Input placeholder={'Insert your name'} />
              <Input isInvalid />
            </HStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
