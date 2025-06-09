// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 1) Punto de entrada principal de la aplicación
  entry: './src/index.jsx',

  // 2) Carpeta de salida (dist) y nombre del bundle generado
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true // Limpia dist/ antes de cada build
  },

  // 3) Resolver extensiones para no tener que escribir .js o .jsx al importar
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // 4) Reglas de transformación
  module: {
    rules: [
      {
        // Transpila archivos .js y .jsx con Babel
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // Permite importar archivos CSS desde src/
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      // Si más adelante importas imágenes/fuentes desde src/,
      // añade aquí tu regla de Asset Modules.
    ]
  },

  // 5) Plugins
  plugins: [
    // 5.1) HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),

    // 5.2) CopyWebpackPlugin
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', 'img'),
          to: 'img'
        }
        // Si el favicon estuviera en public/ y no en public/img:
        // { from: path.resolve(__dirname, 'public', 'favicon.ico'), to: '' }
      ]
    })
  ],

  // 6) Configuración del Dev Server
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
      publicPath: '/',
      serveIndex: false      // <— Desactiva el listado de directorios para evitar el URI malformed
    },
    open: true,
    hot: true,
    port: 3000,

    // Fuerza que cualquier ruta no existente pase a index.html
    // para que React Router maneje el enrutado SPA sin 404
    historyApiFallback: true
  },

  // 7) Modo de Webpack
  mode: 'development'
};
