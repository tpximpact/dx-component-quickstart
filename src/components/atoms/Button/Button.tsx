import React, { ReactElement, ReactNode } from 'react';
import './button.scss';

type ButtonProps = {
  children: ReactNode;
  className: string;
};

export default function Button({ className, children }: ButtonProps): ReactElement {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
