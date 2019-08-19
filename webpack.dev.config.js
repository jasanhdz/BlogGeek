const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: ['babel-polyfill', path.resolve(__dirname, 'src/entries/index.js')],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../../dist/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  devServer: {
    port: 9000,
    publicPath: path.resolve(__dirname, '/dist/'),
    contentBase: path.join(__dirname, '/src/htmls/'),
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      // Solo para desarrollo
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      // usar para produccion.
      // {
      //   test: /\.css$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      {
        test: /\.(jpg|png|gif|svg)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: 'images/[name].[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
  ]
}