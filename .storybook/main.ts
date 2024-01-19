import type { StorybookConfig } from "@storybook/react-webpack5";
import { storybookAddonStylingWebpackConfig } from "./addon-styling-webpack-config";

const config: StorybookConfig = {
  features: {
    storyStoreV7: true,
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ["../static"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "storybook-addon-performance",
    "@storybook/addon-coverage",
    "storybook-css-modules",
    {
      name: "@storybook/addon-styling-webpack",
      options: storybookAddonStylingWebpackConfig,
    },
  ],
  typescript: {
    reactDocgen: "react-docgen",
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        // FIXME: addon-coverage has issues with useSWC: true
        useSWC: false,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;
