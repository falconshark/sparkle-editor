var path = require('path');
var webpack = require('webpack');

module.exports = {
  "entry": "./src/main.js",
  "output": {
    "path": __dirname + "/dist",
    "filename": "bundle.js"
  },
  "resolve": {
    "extensions": ['', '.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.common.js'
    }
  },
  "module": {
    "loaders": [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
  ]
}
