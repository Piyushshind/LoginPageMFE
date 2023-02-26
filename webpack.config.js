const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
    open: false
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "LoginPageMFE",
      filename: "remoteEntry.js",
      remotes: {
        HomePageMFE: 'HomePageMFE@http://localhost:3001/remoteEntry.js',
        LoginPageMFE: 'LoginPageMFE@http://localhost:3002/remoteEntry.js',
        CheckoutPageMFE: 'CheckoutPageMFE@http://localhost:3003/remoteEntry.js',
        ProductPageMFE: 'ProductPageMFE@http://localhost:3004/remoteEntry.js',
      },
      exposes: {
        './Text': './src/components/views/Text/Text.jsx',
        './useMfeStore': './src/utils/zustand.jsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
