'use strict'
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'development',

    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },

    watchOptions: {
        aggregateTimeout: 300,
        poll: 5000
    },

    resolve: {
        extensions: [
            '.js',
            '.vue',
            '.json'
        ],
        alias: {
            '@': resolve('src')
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                use: 'eslint-loader',
                enforce: 'pre'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                        // options: { url: false }
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                        // options: { url: false }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'webfonts'
                    }
                }]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: resolve('index.html'),
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new WorkboxPlugin.GenerateSW(),
        new CopyWebpackPlugin([{
            from: resolve('static'),
            to: resolve('dist'),
            toType: 'dir'
        }])
    ]
}
