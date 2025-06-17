// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // 1) Punto de entrada
  entry: path.resolve(__dirname, 'src/index.jsx'),

  // 2) Salida
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },

  // 3) Resolución de extensiones
  resolve: { extensions: ['.js', '.jsx'] },

  // 4) Loaders
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },

  // 5) Plugins
  plugins: [
    // HTML
    new HtmlWebpackPlugin({ template: 'public/index.html', filename: 'index.html' }),

    // Copiar archivos estáticos específicos
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/img', to: 'img' },
        { from: 'public/sitemap.xml', to: '' },
        { from: 'public/robots.txt', to: '' }
      ]
    })
  ],

  // 6) DevServer
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    hot: true,
    port: 3000,
    historyApiFallback: true
  },

  // 7) Modo según variable de entorno
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};
