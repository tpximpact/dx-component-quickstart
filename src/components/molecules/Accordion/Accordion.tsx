import React, { ReactElement } from "react";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import AccordionItem, {
  AccordionItemProps,
} from "./AccordionItem/AccordionItem";
import "./accordion.scss";

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
    <section className="accordion">
      {title && (
        <Heading headingLevel="h2" className="accordion__title">
          {title}
        </Heading>
      )}
      {body && <Text className="accordion__body">{body}</Text>}
      {accordionItems.map((accordionItem) => (
        <AccordionItem
          key={accordionItem.id}
          summary={accordionItem.summary}
          body={accordionItem.body}
        />
      ))}
    </section>
  );
}

Accordion.defaultProps = {
  title: "Example title",
  body: "Example body",
  accordionItems: Array(12).fill(AccordionItem.defaultProps),
};
