
var path = require("path");

module.exports = {
  entry: './src1/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, "dist1"),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }
}