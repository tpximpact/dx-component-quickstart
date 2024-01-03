import React, { ReactElement } from "react";
import useTheme from "../../hooks/useDarkMode";
import Image, { ImageProps } from "../Image/Image";
import "./textImage.scss";

export interface TextImageProps {
  /**
   * Title text
   */
  title: string;
  /**
   * Body copy
   */
  body: string;
  /**
   * Image
   */
  image: ImageProps;
}

export default function TextImage({
  title,
  body,
  image,
}: TextImageProps): ReactElement {
  const theme = useTheme();
  return (
    <section className={`text-image theme--${theme.mode}`}>
      {image.src && (
        <Image
          src={image.src}
          width={400}
          height={400}
          altText={image.altText}
        />
      )}
      <div className="text-image__content">
        {title && <h2 className="text-image__title">{title}</h2>}
        {body && <p className="text-image__body">{body}</p>}
      </div>
    </section>
  );
}

TextImage.defaultProps = {
  title: "Example title",
  body: "Example body text",
  image: Image.defaultProps,
};
