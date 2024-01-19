import React, { ReactElement } from "react";
import Text from "../../../atoms/Text/Text";
import "./accordionItem.scss";

export interface AccordionItemProps {
  /**
   * Example ID
   */
  id: string;
  /**
   * Example summary
   */
  summary: string;
  /**
   * Example body text
   */
  body: string;
}

export default function AccordionItem({
  id,
  summary,
  body,
}: AccordionItemProps): ReactElement {
  return (
    <details className="accordion-item" data-id={id}>
      <summary className="accordion-item__summary">{summary}</summary>
      <Text className="accordion-item__body">{body}</Text>
    </details>
  );
}
