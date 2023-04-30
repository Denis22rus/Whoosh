'use strict';

let path = require('path');

module.exports = {
  mode: 'development', // режим в котором будет работать webpack.
  entry: './js/script.js', //Точка входа указывает, какой модуль webpack должен использовать
  output: {
    filename: 'bundle.js', // название нового файла
    path: __dirname + '/js' // куда будем складывать. dir - корневая папка
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
