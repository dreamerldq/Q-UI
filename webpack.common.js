const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: ['babel-polyfill', path.join(__dirname, '/src/index.js')],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    publicPath: '/',
    // libraryTarget: 'commonjs2', // 上传组件到npm时使用，将入口文件以module.exports的方式导出
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
        ],
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', 'scss', 'css'],
  },
  devServer: {
    port: 7000,
    historyApiFallback: true,
  },
};

module.exports = webpackConfig;
