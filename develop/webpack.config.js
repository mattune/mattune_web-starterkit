require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const _ = require('lodash');
const splitPath = '/_js/src/';
const jsBasePath = path.resolve(__dirname, '_js/src');
const jsDistPath = path.resolve(__dirname, '../htdocs/assets/js');

String.prototype.filename = function () {
  return this.match('.+/(.+?)([\?#;].*)?$')[1];
};

const targets = _.filter(glob.sync(`${jsBasePath}/**/*.js`), (item) => {
  return !item.filename().match(/^_/);
});

let entries = {};
targets.forEach(value => {
  let key = value.split(splitPath)[1];
  entries[key] = value;
});


const DEBUG = !process.argv.includes('--prd');
console.log('DEBUG MODE : ' + DEBUG);

module.exports = {
  cache: true,
  entry: entries,
  output: {
    path: jsDistPath,
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|dom7|ssr-window|swiper)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: DEBUG ? '#inline-source-map' : false,
  mode: DEBUG ? 'none' : 'production',
};