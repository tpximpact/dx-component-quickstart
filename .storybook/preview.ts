import type { Preview } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";
import "../src/scss/base.scss";

const customViewports = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "360px",
      height: "850px",
    },
    type: "mobile",
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
      height: "1024px",
    },
    type: "tablet",
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1200px",
      height: "700px",
    },
    type: "desktop",
  },
};

export const decorators = [withPerformance];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: { viewports: customViewports },
  },
};

export default preview;
