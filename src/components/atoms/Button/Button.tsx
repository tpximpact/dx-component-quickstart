import clsx from "clsx";
import React, { ReactElement, ReactNode } from "react";
import styles from "./button.module.scss";

type ButtonProps = {
  children: ReactNode;
  className: string;
};

export default function Button({
  className,
  children,
}: ButtonProps): ReactElement {
  return (
    <button type="button" className={clsx(className, styles.primary)}>
      {children}
    </button>
  );
}
