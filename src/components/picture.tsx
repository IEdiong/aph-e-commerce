interface IProps {
  imgSmUrl: string;
  imgMdUrl: string;
  imgLgUrl: string;
  alt: string;
}

export default function Picture({ imgSmUrl, imgMdUrl, imgLgUrl, alt }: IProps) {
  return (
    <picture>
      <source media="(max-width: 704px)" srcSet={imgSmUrl} />
      <source
        media="(min-width: 704px) and (max-width: 1023px)"
        srcSet={imgMdUrl}
      />
      <source media="(min-width: 1024px)" srcSet={imgLgUrl} />
      <img src={imgSmUrl} alt={alt} />
    </picture>
  );
}
