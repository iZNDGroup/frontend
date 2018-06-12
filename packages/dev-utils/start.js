#!/usr/bin/env node

const fs = require("fs");
const ip = require("ip");
const minimist = require("minimist");
const path = require("path");
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const StylelintPlugin = require("stylelint-webpack-plugin");

const argv = minimist(process.argv.slice(2));

const contextDir = process.cwd();

let configPaths = ["./webpack.config.js"];
const packageJsonPath = path.resolve(contextDir, "package.json");
if (fs.existsSync(packageJsonPath)) {
  const packageJson = require(packageJsonPath);
  if (packageJson["gpsgate-start"]) {
    configPaths = packageJson["gpsgate-start"];
  }
}

const host = argv.ip || ip.address();
const port = 9000;
const publicPath = `http://${host}:${port}/`;

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: "webpack",
    minChunks: 2
  })
];

const entry = {};
const entryPath = {};
const stylelintFiles = [];
configPaths.forEach(configPath => {
  const currentWorkingDir = path.dirname(configPath);
  const config = require(configPath);

  if (!config.name) {
    throw new Error(`missing config.name in ${configPath}`);
  }
  const name = config.name;

  if (!config.entry) {
    throw new Error(`missing config.entry in ${configPath}`);
  }
  if (!Array.isArray(config.entry)) {
    config.entry = [config.entry];
  }
  if (entry[name]) {
    throw new Error(`duplicate entry "${name}" in ${configPath}`);
  }
  entry[name] = [
    "babel-polyfill",
    ...config.entry.map(entryFile => {
      return entryFile.indexOf("/") !== -1
        ? path.resolve(currentWorkingDir, config.context || "./", entryFile)
        : entryFile;
    })
  ];

  let publicPath = config.publicPath;
  if (publicPath && publicPath.indexOf("../") === 0) {
    publicPath = publicPath.substr(3);
  }
  if (entryPath[name]) {
    throw new Error(`duplicate entry path "${name}" in ${configPath}`);
  }
  entryPath[name] = path.join(publicPath || "", name);

  stylelintFiles.push(
    path.relative(
      contextDir,
      path.resolve(currentWorkingDir, config.context || "./", "**/*.css")
    )
  );
});

plugins.push(
  new StylelintPlugin({
    files: stylelintFiles,
    emitErrors: false
  })
);

const config = {
  context: contextDir,
  entry: entry,
  output: {
    // TODO: publicPath: publicPath,
    filename: data => {
      const name = data.chunk.name;
      const path = entryPath[name];
      const finalName = path || name;
      return `${finalName}.js`;
    },
    chunkFilename: "chunks/[chunkhash].js"
    // TODO: library: ["__gpsgate__", "[name]"]
  },
  // TODO: externals: {},
  plugins: plugins,
  devtool: "cheap-module-source-map",
  performance: {
    hints: false
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        loader: "url-loader",
        options: {
          limit: 1, // TODO: 8192
          name: "static/[hash].[ext]"
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
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
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "less-loader"
        ]
      }
    ]
  }
};

Object.keys(config.entry).forEach(entry => {
  config.entry[entry].unshift(
    `webpack-dev-server/client?http://${host}:${port}`,
    "webpack/hot/dev-server"
  );
});
config.output.publicPath = publicPath;
const compiler = webpack(config);

const options = {
  publicPath: publicPath,
  // disableHostCheck: true,
  contentBase: false,
  hot: true,
  compress: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "X-Requested-With, content-type, Authorization"
  },
  watchOptions: {
    ignored: /node_modules/
  },
  stats: {
    colors: false,
    modules: false,
    children: false,
    chunks: false,
    hash: false
  },
  filename: "DUMMY.js"
};
const server = new webpackDevServer(compiler, options);
server.listen(port, "0.0.0.0", () => {
  console.log(`webpack-dev-server: http://${host}:${port}/`);
  console.log("webpack: Compiling...");
});
