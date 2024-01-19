import React, { ReactElement } from 'react';

export interface ImageProps {
  /**
   * Source url of the image
   */
  src: {
    small?: string;
    medium?: string;
    default: string;
  };
  /**
   * Breakpoints for each image source
   */
  size?: {
    small: number;
    medium: number;
    default: number;
  };
  /*
   * Width of image to stop layout shift
   */
  width: number;
  /*
   * Height of image to stop layout shift
   */
  height: number;
  altText: string;
  /*
   * The loading attribute is used to lazy load the image. If you need the image
   * to load quickly (example on a hero) then set loadingAttr to "eager"
   */
  loadingAttr?: 'lazy' | 'eager' | undefined;
}

export default function Image({ src, size, width, height, altText, loadingAttr = 'lazy' }: ImageProps): ReactElement {
  return (
    <img
      className="image"
      srcSet={`${src.small}, ${src.medium}, ${src.default}`}
      sizes={`${size?.small ?? 576}w, ${size?.medium ?? 992}w, ${size?.default ?? 1440}w`}
      src={src.default}
      width={width}
      height={height}
      alt={altText}
      loading={loadingAttr}
    />
  );
}

Image.defaultProps = {
  src: {
    small: 'https://picsum.photos/600/600',
    medium: 'https://picsum.photos/1200/1200',
    default: 'https://picsum.photos/2400/2400'
  },
  width: 500,
  height: 500,
  altText: 'An example image'
};
