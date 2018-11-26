var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
  //Aqui indicamos que el contenido de app.js, sera convertido a app.bundle.js dentro de dist. para que este luego se agregue automaticamente al html
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        //Regla para verificar y leer los archivos de formato scss, esto para leer el scss/saas 
        //convertirlo en css y luego agregarlo a Js, y por ultimo se agrega loader para poder
        //crear css en base a string de Js generados con css-loader
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        //Regla para ferificar y transpilar contenido de archivos js y jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        //Regla para verificacion de imagenes en los formatos especificados, para cargarlas dentro de la aplicacion
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  //Configuracion del debserver
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true
    // hot:true,
    // stats:"errors-only"
  },
  plugins: [
    //Descripcion de plugin, que generara el html de la aplicacion en base a un template, y pone un titulo 
    //que se define aqui
    new HtmlWebpackPlugin({
      title: 'Super Memory!',
      minify: {
        collapseWhitespace: true
      },
      template: './src/test.html'

    }),
    //new webpack.HotModuleReplacementPlugin()
    //new webpack.NameModulesPlugin()

  ]

}