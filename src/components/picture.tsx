interface IProps {
  imgSmUrl: string;
  imgMdUrl: string;
  imgLgUrl: string;
  alt: string;
}

export default function Picture({ imgSmUrl, imgMdUrl, imgLgUrl, alt }: IProps) {
  return (
    <picture
      style={{
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    >
      <source media="(max-width: 736px)" srcSet={imgSmUrl} />
      <source
        media="(min-width: 737px) and (max-width: 1023px)"
        srcSet={imgMdUrl}
      />
      <source media="(min-width: 1024px)" srcSet={imgLgUrl} />
      <img
        style={{ height: '100%', objectFit: 'cover', display: 'block' }}
        src={imgSmUrl}
        width="654"
        height="600"
        alt={alt}
      />
    </picture>
  );
}
