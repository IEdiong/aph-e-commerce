export default function convertDesktopSizeImg(
  imgLgUrl: string,
  size: 'mobile' | 'tablet'
) {
  if (!imgLgUrl) return '';
  let img: string;
  if (size === 'mobile') {
    img = imgLgUrl.replace('desktop', 'mobile');
  } else {
    img = imgLgUrl.replace('desktop', 'tablet');
  }

  return img;
}
