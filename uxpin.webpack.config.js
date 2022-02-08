const path = require("path");
const webpack = require("webpack");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*','.ts', '.js', '.tsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          { loader: 'resolve-url-loader' },
          // [sass-loader](/loaders/sass-loader)
          { loader: 'sass-loader' }
        ]
      },
      {
        loader: 'babel-loader',
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          compact: false,
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.(ts|js)x?$/,
        loader: 'source-map-loader'
      }
    ]
  }
}
