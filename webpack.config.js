const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const seo = require("./seo.config");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const publicPath = "/";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      clean: true,
      publicPath
    },
    devServer: {
      static: [
        path.join(__dirname, "public"),
        { directory: path.join(__dirname, "dist"), publicPath: "/" }
      ],
      port: 3000,
      open: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"]
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: "asset/resource"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        templateParameters: seo
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.join(__dirname, "CNAME"),
            to: "."
          },
          {
            from: path.join(__dirname, "public", "images"),
            to: "images",
            noErrorOnMissing: true
          },
          {
            from: path.join(__dirname, "public", "robots.txt"),
            to: "."
          },
          {
            from: path.join(__dirname, "public", "sitemap.xml"),
            to: "."
          }
        ]
      })
    ]
  };
};
