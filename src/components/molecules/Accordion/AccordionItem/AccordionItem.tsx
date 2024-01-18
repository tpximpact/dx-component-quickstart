import React, { ReactElement } from 'react';
import Text from '../../../atoms/Text/Text';
import './accordionItem.scss';

export interface AccordionItemProps {
  /**
   * Example summary
   */
  summary: string;
  /**
   * Example body text
   */
  body: string;
}

export default function AccordionItem({ summary, body }: AccordionItemProps): ReactElement {
  return (
    <details className="accordion-item">
      <summary className="accordion-item__summary">{summary}</summary>
      <Text className="accordion-item__body">{body}</Text>
    </details>
  );
}

AccordionItem.defaultProps = {
  summary: 'Accordion Item',
  body: 'Content for Accordion Item'
};
