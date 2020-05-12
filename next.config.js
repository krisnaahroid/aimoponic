const webpack = require("webpack");
const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withSass(withFonts({
    env: {
      API: "http://localhost:8080",
      SPACE_ID: "fz8qdsqhkxef",
      ACCESS_TOKEN: "feE_Euk-EnM3oB9wApHZlEe61_qKREqanmw-OsllD4I"
    },
  
    webpack (config, options) {
      config.plugins.push(
        new webpack.EnvironmentPlugin(process.env)
      )
  
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      })
      return config
    }
  })))