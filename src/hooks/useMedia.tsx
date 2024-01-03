import { useState, useEffect } from "react";

export default function useMobile(
  mobileWidth = "768px",
  boolean = true,
): boolean {
  const [mobile, setMobile] = useState(boolean);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${mobileWidth})`);
    setMobile(!mediaQuery.matches);
    const handler = (e: MediaQueryListEvent): void => setMobile(!e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [mobileWidth]);

  return mobile;
}
