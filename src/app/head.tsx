'use client';
import { NextFont } from 'next/dist/compiled/@next/font';

const Head = ({ fontFam }: { fontFam: NextFont }) => {
  return (
    <head>
      <link rel='icon' sizes='32x32' />
      <style jsx global>
        {`
          :root {
            --font-esc: ${fontFam.style.fontFamily};
          }
        `}
      </style>
    </head>
  );
};

export default Head;
