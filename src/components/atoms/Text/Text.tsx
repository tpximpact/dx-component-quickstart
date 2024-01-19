import React, { ReactNode, ReactElement } from "react";

type TextProps = {
  className: string;
  children: ReactNode;
};

export default function Text({ className, children }: TextProps): ReactElement {
  return <p className={className}>{children}</p>;
}
