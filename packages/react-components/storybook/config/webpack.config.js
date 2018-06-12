const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "../../src"),
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                require("postcss-preset-env")(),
                require("postcss-flexbugs-fixes"),
                require("autoprefixer")({
                  flexbox: "no-2009"
                })
              ]
            }
          }
        ]
      }
    ]
  }
};
