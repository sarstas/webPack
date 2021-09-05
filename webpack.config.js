const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: "main.[contenthash].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,  // sass  scss  css
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.mp3$/, //для подгрузки медиафайлов
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'media',
                        name: '[name].[hash].[ext]'
                    }
                }
            },
            // {
            //     test: /\\.(png|jpe?g|gif|mp3)$/i,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[path][name].[ext]',
            //     }
            // }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        }),
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin(),
    ]

}