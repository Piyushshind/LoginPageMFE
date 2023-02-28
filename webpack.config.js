const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');

dotenv.config()

const deps = require("./package.json").dependencies;
module.exports = (env)=>({
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
    new Dotenv(),
    new ModuleFederationPlugin({
      name: "LoginPageMFE",
      filename: "remoteEntry.js",
      remotes: {
        
        HomePageMFE: `HomePageMFE@${process.env.HomePageMFE}remoteEntry.js`,
        ProductPageMFE: `ProductPageMFE@${process.env.ProductPageMFE}remoteEntry.js`,
        CheckoutPageMFE: `CheckoutPageMFE@${process.env.CheckoutPageMFE}remoteEntry.js`,
      },
      exposes: {
        './useMfeStore': './src/utils/zustand.jsx',
        './products': './src/utils/products.jsx',
        './Text': './src/components/views/Text/Text.jsx',
        './LoginPage': './src/components/views/LoginPage/LoginPage.jsx',
        './RegisterPage': './src/components/views/RegisterPage/RegisterPage.jsx',
        './ErrorPage': './src/components/views/ErrorPage/ErrorPage.jsx',
        './ReactRouterDom': 'react-router-dom',
        './Navbar': './src/components/views/Navbar/Navbar.jsx',
        './RoutingComponant': './src/components/views/RoutingComponant/RoutingComponant.jsx',
        
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
});
