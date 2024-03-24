import app from "./globals.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


 const config = {
  mode: app.isBuild ? 'production' : 'development',
  entry: {
    main: path.resolve(__dirname, `${app.path.src.js}`)
  },
  output: {
      path: path.resolve(__dirname, `${app.path.build.js}`),
      filename: `${app.path.jsFileName}`
  },
  devtool: app.isBuild ? false : 'source-map',
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']}
          }
      }, 
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }]
 }
};
export default config