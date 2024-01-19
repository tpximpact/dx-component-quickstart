import type { StorybookConfig } from "@storybook/react-webpack5";

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
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        storySort: {
          order: ["Atoms", "Molecules", "Organisms", "Pages"],
        },
        rules: [
          {
            test: /\.s[ac]ss$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                loader: require.resolve("css-loader"),
                options: {
                  importLoaders: 3,
                },
              },
              {
                loader: require.resolve("postcss-loader"),
                options: {
                  implementation: require.resolve("postcss"),
                },
              },
              require.resolve("resolve-url-loader"),
              {
                loader: require.resolve("sass-loader"),
                options: {
                  // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
                  implementation: require.resolve("sass"),
                  sourceMap: true,
                  sassOptions: {},
                },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        fsCache: true,
        lazyCompilation: true,
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
