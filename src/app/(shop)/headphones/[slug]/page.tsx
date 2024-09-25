import { Suspense } from 'react';
import FeatureProducts from '@/components/feature-products';
import InfoSection from '@/components/info-section';
import { Box, Container, Flex, VStack } from '@/utils/chakra-components';
import NavigateBack from '@/components/navigate-back';
import Features from '@/components/features';
import InTheBox from '@/components/in-the-box';
import MoreProducts from '@/components/more-products';
import Gallery from '@/components/gallery';
import Data from '@/data/data.json';
import Card from '@/components/card';

// async function getData() {
//   const res = await fetch('http://localhost:3000/api/earphone', {
//     method: 'GET',
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   const data = await res.json();
//   console.log(data);

//   return data;
// }
const items = Data;
// const product = {
//   id: 4,
//   slug: 'xx99-mark-two-headphones',
//   name: 'XX99 Mark II Headphones',
//   image: {
//     mobile: '/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
//     tablet: '/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
//     desktop:
//       '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
//   },
//   category: 'headphones',
//   categoryImage: {
//     mobile:
//       '/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
//     tablet:
//       '/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
//     desktop:
//       '/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
//   },
//   new: true,
//   price: 2999,
//   description:
//     'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
//   features:
//     'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
//   includes: [
//     {
//       quantity: 1,
//       item: 'Headphone unit',
//     },
//     {
//       quantity: 2,
//       item: 'Replacement earcups',
//     },
//     {
//       quantity: 1,
//       item: 'User manual',
//     },
//     {
//       quantity: 1,
//       item: '3.5mm 5m audio cable',
//     },
//     {
//       quantity: 1,
//       item: 'Travel bag',
//     },
//   ],
//   gallery: {
//     first: {
//       mobile:
//         '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg',
//       tablet:
//         '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg',
//       desktop:
//         '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
//     },
//     second: {
//       mobile:
//         '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
//       tablet:
//         '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
//       desktop:
//         '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
//     },
//     third: {
//       mobile:
//         '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
//       tablet:
//         '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg',
//       desktop:
//         '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
//     },
//   },
//   others: [
//     {
//       slug: 'xx99-mark-one-headphones',
//       name: 'XX99 Mark I',
//       image: {
//         mobile: '/assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
//         tablet: '/assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
//         desktop: '/assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
//       },
//     },
//     {
//       slug: 'xx59-headphones',
//       name: 'XX59',
//       image: {
//         mobile: '/assets/shared/mobile/image-xx59-headphones.jpg',
//         tablet: '/assets/shared/tablet/image-xx59-headphones.jpg',
//         desktop: '/assets/shared/desktop/image-xx59-headphones.jpg',
//       },
//     },
//     {
//       slug: 'zx9-speaker',
//       name: 'ZX9 Speaker',
//       image: {
//         mobile: '/assets/shared/mobile/image-zx9-speaker.jpg',
//         tablet: '/assets/shared/tablet/image-zx9-speaker.jpg',
//         desktop: '/assets/shared/desktop/image-zx9-speaker.jpg',
//       },
//     },
//   ],
// };

const HeadphoneDetail = async ({ params }: { params: { slug: string } }) => {
  // const res = await fetch('http://localhost:3000/api/earphone');
  // const { data } = await res.json();
  // console.log(`Product: ${data.id}`);

  const product = items[Number(params.slug) - 1];

  return (
    <Box as="main">
      <Container pb="160px" pt={{ base: '4', md: '33px', lg: '79px' }}>
        <Suspense fallback={null}>
          <NavigateBack />
        </Suspense>
        <VStack
          mt={{ base: '6', lg: '56px' }}
          spacing={{ base: '120px', lg: '160px' }}
          align="stretch"
        >
          <Card product={product} canAddToCart={true} />

          {/* <ProductCard
            product={product}
            canAddToCart={true}
            ctaText={'Add to cart'}
          /> */}
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            justify="flex-start"
            columnGap="125px"
            rowGap="120px"
          >
            <Features features={product.features} />
            <InTheBox includes={product.includes} />
          </Flex>
          <Gallery
            imgOne={product.gallery.first.desktop}
            imgTwo={product.gallery.second.desktop}
            imgThree={product.gallery.third.desktop}
          />
          <MoreProducts others={product.others} />
          <FeatureProducts />
          <InfoSection />
        </VStack>
      </Container>
    </Box>
  );
};

export default HeadphoneDetail;
