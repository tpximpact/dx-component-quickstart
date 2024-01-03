import React, { ReactElement } from "react";
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
      {title && <h2 className="accordion__title">{title}</h2>}
      {body && <p className="accordion__body">{body}</p>}
      {accordionItems.map((accordionItem) => (
        <AccordionItem key={accordionItem.id} {...accordionItem} />
      ))}
    </section>
  );
}

Accordion.defaultProps = {
  title: "Example title",
  body: "Example body",
  accordionItems: Array(12).fill(AccordionItem.defaultProps),
};
