import React, { ReactElement } from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function Heading({ headingLevel = 'h1', children, ...props }: HeadingProps): ReactElement {
  return React.createElement(headingLevel.toLowerCase(), { ...props }, children);
}
