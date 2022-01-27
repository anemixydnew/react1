const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /\..js$/,
        loader: 'babel-loader',
        options: {
          presets: [
              [
                  '@babel/preset-react',
                  {
                      runtime: 'automatic'
                  }
              ]
          ]
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html'
    })
  ],
}
