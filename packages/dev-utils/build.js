#!/usr/bin/env node

const path = require("path");
const minimist = require("minimist");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const argv = minimist(process.argv.slice(2));

let currentWorkingDir = process.cwd();
if (argv._ && argv._.length === 1) {
  currentWorkingDir = path.resolve(currentWorkingDir, argv._[0]);
}

const configPath = path.resolve(currentWorkingDir, "webpack.config.js");
const config = require(configPath);

const outputPath = path.resolve(
  currentWorkingDir,
  config.outputPath || "webpack_dist"
);

const publicPath = config.publicPath || "";

const sourceMap = true;

const plugins = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production")
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      comparisons: false
    },
    output: {
      comments: false,
      ascii_only: true
    },
    sourceMap: sourceMap
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new ExtractTextPlugin({
    filename: "[name].css"
  }),
  new StylelintPlugin({
    files: ["**/*.css"]
  })
];

if (argv.analyze) {
  plugins.push(new BundleAnalyzerPlugin());
}

// Name
if (!config.name) {
  throw new Error(`missing config.name in ${configPath}`);
}
const name = config.name;

// Entry
if (!config.entry) {
  throw new Error(`missing config.entry in ${configPath}`);
}
if (!Array.isArray(config.entry)) {
  config.entry = [config.entry];
}
const entry = {
  [name]: config.entry
};

// Library
const library = config.library || ["__gpsgate__", "[name]"]; // TODO

// Alias
const alias = {
  "lodash-es": "lodash"
};

// Externals
const externals = {
  react: "React",
  "react-dom": "ReactDOM"
  // TODO
};

// Webpack
webpack(
  {
    context: path.resolve(currentWorkingDir, config.context || "./"),
    entry: entry,
    output: {
      path: outputPath,
      publicPath: publicPath,
      filename: "[name].js",
      chunkFilename: "[name].chunk.js",
      library: library
    },
    resolve: {
      alias: alias
    },
    externals: externals,
    plugins: plugins,
    devtool: sourceMap ? "source-map" : false,
    bail: true,
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/,
          exclude: /node_modules/,
          loader: "url-loader",
          options: {
            limit: 1, // TODO: 8192
            name: "static/[name].[ext]?[hash:8]"
          }
        },
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
            failOnError: true,
            failOnWarning: true
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            compact: true
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract({
            fallback: {
              loader: "style-loader",
              options: {
                hmr: false
              }
            },
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true,
                  sourceMap: sourceMap,
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
            ],
            publicPath: "./"
          })
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract({
            fallback: {
              loader: "style-loader",
              options: {
                hmr: false
              }
            },
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true,
                  sourceMap: sourceMap,
                  importLoaders: 1
                }
              },
              {
                loader: "less-loader",
                options: {
                  sourceMap: sourceMap
                }
              }
            ],
            publicPath: "./"
          })
        }
      ]
    }
  },
  (err, stats) => {
    if (err) {
      throwError(err);
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
      const errors = getMessages(info.errors);
      throwError(errors);
    }

    if (stats.hasWarnings()) {
      const warnings = getMessages(info.warnings);
      throwError(warnings);
    }

    console.log(
      stats.toString({
        colors: false,
        modules: false,
        children: false,
        chunks: false,
        hash: false
      })
    );
  }
);

function throwError(error) {
  console.error(error);
  process.exit(1);
};

function getMessages(info) {
  const messages = info.map(message => {
    let lines = message.split("\n");
    lines = lines.filter(line => line.trim() !== "");
    lines = lines.filter(line => line.indexOf(" @ ") !== 0);
    return lines.join("\n").trim();
  });
  return messages.join("\n").trim();
};
