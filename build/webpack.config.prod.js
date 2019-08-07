'use strict'
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'production',

    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name (module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`
                    }
                }
            }
        },
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
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
