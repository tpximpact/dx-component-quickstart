import React, { ReactElement, ReactNode } from 'react';

type LinkProps = {
  href: string;
  children: ReactNode;
  className: string;
};

export default function Link({ href, className, children }: LinkProps): ReactElement {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
