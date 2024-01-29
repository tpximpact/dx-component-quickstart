import React, { ReactElement } from "react";
import Text from "../../../atoms/Text/Text";
import styles from "./accordionItem.module.scss";

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
    <details className={styles.accordionItem} data-id={id}>
      <summary className={styles.accordionItemSummary}>{summary}</summary>
      <Text className={styles.accordionItemBody}>{body}</Text>
    </details>
  );
}
