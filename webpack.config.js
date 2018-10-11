const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: `./src/app.jsx`,
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, `./dist`),
    filename: `[name].[hash].js`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: "file-loader"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: path.resolve(__dirname, `src/index.html`),
    })
  ],
  devServer: {
    inline: true,
    contentBase: `./dist`,
    port: 8080,
    historyApiFallback: true
  }
};