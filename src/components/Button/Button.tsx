import React, { ReactElement } from "react";
import useTheme from "../../hooks/useDarkMode";
import "./button.scss";

export interface ButtonProps {
  label: string;
  /**
   * Optional url
   */
  url?: string;
}

/**
 * Primary UI component for user interaction
 */

export default function Button({ url, label }: ButtonProps): ReactElement {
  const theme = useTheme();
  return url ? (
    <a className={`button theme--${theme.mode}`} href={url}>
      {label}
    </a>
  ) : (
    <button type="button" className={`button theme--${theme.mode}`}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  label: "Button",
  buttonlinkprops: {
    label: "Button",
    url: "#",
  },
};
