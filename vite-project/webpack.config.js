'use strict';

const path = require('path');
const HTMLPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} =require("clean-webpack-plugin");


module.exports = {
    
    entry: './js/index.js',
    output: {
      path: path.resolve(__dirname, '/build/js'),
      filename: 'bundle.[chunkhash].js',
    },

    devtool:  'source-map',
    devServer: {
        port: 3001
    },

    plugins: [
        new HTMLPlugin({
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
        // {
        //     test: /\.svg$/,
        //     loader: 'svg-inline-loader'
        // }
        ],

    }
  }