const elmMake = __dirname + '/node_modules/.bin/elm-make';
const elmSource = __dirname + '/web/static/js/elm';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      "./web/static/js/app.js",
      "./web/static/js/elm/src/App.elm"
    ]
  },
  output: {
    path: "./priv/static/js",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.elm$/,
        exclude: /(node_modules|elm-stuff)/,
        loader: `elm-webpack?pathToMake=${elmMake}&cwd=${elmSource}`
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/app.css', {
      allChunks: true
    })
  ]
};
