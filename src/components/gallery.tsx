import { Grid, GridItem } from '@/utils/chakra-components';
import Picture from './picture';
import convertDesktopSizeImg from '@/libs/get-img';

interface GalleryProps {
  imgOne: string;
  imgTwo: string;
  imgThree: string;
}

const Gallery = ({ imgOne, imgTwo, imgThree }: GalleryProps) => {
  return (
    <Grid
      gridRowGap={{ base: '20px', lg: '32px' }}
      gridColumnGap={{ md: '18px', lg: '30px' }}
      gridTemplateColumns={{
        // base: '1fr',
        md: 'minmax(0, 277px) 1fr',
        lg: 'minmax(0, 445px) 1fr',
      }}
      gridTemplateRows={{
        base: 'repeat(4, minmax(174px, 1fr))',
        md: 'repeat(2, minmax(174px, 1fr))',
        lg: 'repeat(2, minmax(280px, 1fr))',
      }}
    >
      <GridItem
        borderRadius="lg"
        overflow="hidden"
        position={'relative'}
        colSpan={{ base: 2, md: 1 }}
      >
        <Picture
          alt=""
          imgLgUrl={imgOne}
          imgMdUrl={convertDesktopSizeImg(imgOne, 'tablet')}
          imgSmUrl={convertDesktopSizeImg(imgOne, 'mobile')}
        />
      </GridItem>
      <GridItem
        rowStart={2}
        colSpan={{ base: 2, md: 1 }}
        borderRadius="lg"
        overflow="hidden"
        position={'relative'}
      >
        <Picture
          alt=""
          imgLgUrl={imgTwo}
          imgMdUrl={convertDesktopSizeImg(imgTwo, 'tablet')}
          imgSmUrl={convertDesktopSizeImg(imgTwo, 'mobile')}
        />
      </GridItem>
      <GridItem
        colStart={{ base: 1, md: 2 }}
        colSpan={{ base: 2, md: 1 }}
        rowSpan={2}
        borderRadius="lg"
        overflow="hidden"
        position={'relative'}
      >
        <Picture
          alt=""
          imgLgUrl={imgThree}
          imgMdUrl={convertDesktopSizeImg(imgThree, 'tablet')}
          imgSmUrl={convertDesktopSizeImg(imgThree, 'mobile')}
        />
      </GridItem>
    </Grid>
  );
};

export default Gallery;
