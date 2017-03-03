import path from 'path';

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.jsx',
    './public/index.html',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          // 'postcss-loader?sourceMap',
          'sass-loader?sourceMap'],
      },
    ],
  },
};
