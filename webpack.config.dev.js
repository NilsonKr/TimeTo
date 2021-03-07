const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js'],
    alias: {
      '@animate': path.resolve(__dirname, 'node_modules/animate.css/'),
      '@styles': path.resolve(__dirname, 'styles/'),
      '@utils': path.resolve(__dirname, 'src/utils/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test : /\.(css|s[ac]ss)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    }),
    new MiniCssExtractPlugin(),
    new copyWebpackPlugin({
      patterns: [
        {from: path.resolve(__dirname, 'assets/') , to: 'assets/'},
        {from: path.resolve(__dirname, 'favicon.ico'), to: ''}
      ]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    compress: true,
  }
}