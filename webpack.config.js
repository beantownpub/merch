const path = require('path')
const webpack = require('webpack')

module.exports = env => {
  return {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.GOOGLE_API_KEY": JSON.stringify(process.env.GOOGLE_API_KEY),
        "process.env.SQUARE_APP_ID": JSON.stringify(process.env.SQUARE_APP_ID),
        "process.env.SQUARE_LOCATION_ID": JSON.stringify(process.env.SQUARE_LOCATION_ID),
        "process.env.STATIC_PATH": JSON.stringify(process.env.STATIC_PATH),
        "process.env.ENV": JSON.stringify(process.env.NODE_ENV),
        "process.env.SUPPORT_EMAIL": JSON.stringify(process.env.SUPPORT_EMAIL)
      })
    ],
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/public/js'),
    },
    node: {
      fs: 'empty'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
