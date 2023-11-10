'use strict';

const path = require('path');
const HTMLPrugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} =require("clean-webpack-plugin");


module.exports = {
    
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, '/build/js'),
      filename: 'bundle.[chunkhash].js',
    },

    devtool: "sourse-map",
    devServer: {
        port: 3001
    },

    plugins: [
        new HtmlPlugin({
            template: "index.html",
        }),
    
        new CleanWebpackPlugin()
    
    ],
    module: {
        rules: [{
            test: /\.css$/i,
            use:["style-loader", "css-loader"],
        },
        {
            test: /\.(png|jpg?g|gif)$/i,
            use: [
                {
                    loader:"file-loader"
                },
            ],
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        }
        ],

    }
  }