import { Grid, GridItem, Image } from '@/utils/chakra-components';

interface GalleryProps {
  imgOne: string;
  imgTwo: string;
  imgThree: string;
}

const Gallery = ({ imgOne, imgTwo, imgThree }: GalleryProps) => {
  return (
    <Grid
      gridRowGap="32px"
      gridColumnGap="30px"
      gridTemplateColumns="minmax(0, 445px) 1fr"
      gridTemplateRows="repeat(2, minmax(280px, 1fr))"
    >
      <GridItem borderRadius="lg" overflow="hidden">
        <Image src={imgOne} alt="" />
      </GridItem>
      <GridItem rowStart={2} borderRadius="lg" overflow="hidden">
        <Image src={imgTwo} alt="" />
      </GridItem>
      <GridItem colStart={2} rowSpan={2} borderRadius="lg" overflow="hidden">
        <Image src={imgThree} alt="" />
      </GridItem>
    </Grid>
  );
};

export default Gallery;
