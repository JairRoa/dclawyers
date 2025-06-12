// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 1) Punto de entrada principal de la aplicación
  entry: path.resolve(__dirname, 'src/index.jsx'),

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
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        // Permite importar archivos CSS desde src/
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      // Para imágenes, fuentes u otros assets, considera Asset Modules
    ]
  },

  // 5) Plugins
  plugins: [
    // Genera index.html en /dist
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),

    // Copia todo public/ excepto index.html a /dist
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ],

  // 6) Configuración del Dev Server
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      watch: true
    },
    open: true,
    hot: true,
    port: 3000,
    historyApiFallback: true
  },

  // 7) Modo de Webpack (development o production)
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
