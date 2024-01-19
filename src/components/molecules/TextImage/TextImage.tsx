import React, { ReactElement } from 'react';
import useTheme from '../../../hooks/useDarkMode';
import Heading from '../../atoms/Heading/Heading';
import Image, { ImageProps } from '../../atoms/Image/Image';
import './textImage.scss';
import Text from '../../atoms/Text/Text';

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

export default function TextImage({ title, body, image }: TextImageProps): ReactElement {
  const theme = useTheme();
  return (
    <section className={`text-image theme--${theme.mode}`}>
      {image.src && <Image src={image.src} width={400} height={400} altText={image.altText} />}
      <div className="text-image__content">
        {title && (
          <Heading headingLevel="h2" className="text-image__title">
            {title}
          </Heading>
        )}
        {body && <Text className="text-image__body">{body}</Text>}
      </div>
    </section>
  );
}

TextImage.defaultProps = {
  title: 'Example title',
  body: 'Example body text',
  image: Image.defaultProps
};
