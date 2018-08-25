import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  entry: ['./src/index.jsx', './src/api.jsx'],
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
        options: {
          presets: ['stage-2', 'env', 'react']
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    })
  ],
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 8080
  }
}