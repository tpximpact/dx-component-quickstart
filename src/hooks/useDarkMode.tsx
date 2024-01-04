import { useEffect, useState } from "react";

type UseThemeProps = { mode: "light" | "dark" };

const useTheme = (): UseThemeProps => {
  const [mode, setMode] = useState<"light" | "dark">(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useEffect(() => {
    const modeMe = (e: MediaQueryListEvent): void => {
      setMode(e.matches ? "dark" : "light");
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", modeMe);
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeListener(modeMe);
  }, []);
  return { mode };
};

export default useTheme;
