import clsx from "clsx";
import React, { ReactElement } from "react";
import useTheme from "../../../hooks/useDarkMode";
import Heading from "../../atoms/Heading/Heading";
import Image, { ImageProps } from "../../atoms/Image/Image";
import Link from "../../atoms/Link/Link";
import Text from "../../atoms/Text/Text";
import styles from "./card.module.scss";

export interface CardProps {
  /**
   * Is this the principal call to action on the page?
   */
  image: ImageProps;
  /**
   * The title
   */
  title: string;
  /**
   * The description
   */
  body: string;
  /**
   * The url used to link the card
   */
  url?: string;
}

export default function Card({
  image,
  title,
  body,
  url,
}: CardProps): ReactElement {
  const theme = useTheme();

  function handleClick(e: React.MouseEvent<HTMLElement>): void {
    const link = e.currentTarget.querySelector("a");
    if (link) {
      link.click();
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li
      className={clsx(styles.card, `theme--${theme.mode}`)}
      onClick={(event) => {
        handleClick(event);
      }}
    >
      {image.src && (
        <Image
          src={image.src}
          width={400}
          height={400}
          altText={image.altText}
        />
      )}
      <span className={styles.cardContainer}>
        {title && (
          <Heading headingLevel="h2" className={styles.cardTitle}>
            {url ? (
              <Link className={styles.cardLink} href={url}>
                {title}
              </Link>
            ) : (
              title
            )}
          </Heading>
        )}
        {body && <Text className={styles.cardBody}>{body}</Text>}
      </span>
    </li>
  );
}
