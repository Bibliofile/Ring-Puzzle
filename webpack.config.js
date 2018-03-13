const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /(\.html|\.css)$/,
        use: [
          'raw-loader'
        ]
      },
      {
          test: /\.tsx?$/,
          use: [
              'ts-loader'
          ]
      },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          'sass-loader'
        ]
      }
    ]
  }
};