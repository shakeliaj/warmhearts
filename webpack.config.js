const path = require('path');

// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const config = {
  entry: './app/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-loader',
          'sass-loader',
        ],
      }, {
        test: /\.(ttf|eot|svg|gif|png|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'app', 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    historyApiFallback: true,
  },
};

module.exports = config;
