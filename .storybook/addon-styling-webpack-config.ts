/**
 * Config for @storybook/addon-styling-webpack
 */
export const storybookAddonStylingWebpackConfig = {
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
};
