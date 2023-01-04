const path = require('path')
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js'],
    },
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        port: 9000,
        static: path.resolve(__dirname, './dist/'),
        // https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
        historyApiFallback: true,
        hot: true,
    },
    stats: { warnings: false },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader'],
            },
        ],
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'static', 'index.html'),
        }),
        new CopyPlugin({
            patterns: [
                path.resolve(__dirname, './src/data')
            ]
        })
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    mode: process.env.MODE,
}
