const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, 'src/js', 'main.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: "main.[contenthash].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,  // sass  scss  css
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|mp3|mp4)$/i, //для подгрузки медиафайлов
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            compress: {
                                mode: 'high',
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false ,
                            }
                        }
                    }
                ]
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        }),
        new CleanWebpackPlugin(),
        ]

}