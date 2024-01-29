import React, { ReactElement } from "react";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import AccordionItem, {
  AccordionItemProps,
} from "./AccordionItem/AccordionItem";
import styles from "./accordion.module.scss";

export interface AccordionProps {
  /**
   * Example title
   */
  title?: string;
  /**
   * Example body text
   */
  body?: string;
  /**
   * Example accordion items
   */
  accordionItems: AccordionItemProps[];
}

export default function Accordion({
  title,
  body,
  accordionItems,
}: AccordionProps): ReactElement {
  return (
    <section className={styles.accordion}>
      {title && <Heading headingLevel="h2">{title}</Heading>}
      {body && <Text className={styles.accordionBody}>{body}</Text>}
      {accordionItems.map((accordionItem) => (
        <AccordionItem
          key={accordionItem.id}
          id={accordionItem.id}
          summary={accordionItem.summary}
          body={accordionItem.body}
        />
      ))}
    </section>
  );
}
