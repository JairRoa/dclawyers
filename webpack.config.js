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
      // Si en el futuro importas imágenes o fonts directamente desde src/,
      // puedes agregar aquí una regla de Asset Modules:
      // {
      //   test: /\.(png|jpe?g|gif|svg|ico)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'assets/[hash][ext][query]'
      //   }
      // }
    ]
  },

  // 5) Plugins
  plugins: [
    // 5.1) HtmlWebpackPlugin: toma public/index.html y genera dist/index.html,
    // inyectando automáticamente <script src="bundle.js"></script> al final del body.
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
      // Si necesitas pasar variables al template, puedes usar `templateParameters: { ... }`
    }),

    // 5.2) CopyWebpackPlugin: copia archivos estáticos de public/img a dist/img
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', 'img'),
          to: 'img' 
          // Resultado: dist/img/<tus-imágenes>.png
        }
        // Si tienes otros archivos estáticos en public/ que quieras copiar (p.ej. favicon),
        // agrega más patterns aquí. Por ejemplo:
        // {
        //   from: path.resolve(__dirname, 'public', 'favicon.ico'),
        //   to: '' // Lo copiará como dist/favicon.ico
        // }
      ]
    })
  ],

  // 6) Configuración del Dev Server (solo para desarrollo con `npm run start`)
  devServer: {
    // Sirve archivos de la carpeta `public/` en la raíz del servidor,
    // para que en desarrollo puedas probar directamente rutas como /img/…
    static: {
      directory: path.resolve(__dirname, 'public'),
      publicPath: '/'
    },
    open: true,    // Abre el navegador automáticamente al iniciar `npm run start`
    hot: true,     // Habilita Hot Module Replacement
    port: 3000     // Puerto de desarrollo
    // Si en un futuro usas React Router o rutas HTML5, podrías añadir:
    // historyApiFallback: true
  },

  // 7) Modo de Webpack. Para desarrollo mantenemos 'development'.
  //    Para producción se usa `--mode production` en el script de build.
  mode: 'development'
};
