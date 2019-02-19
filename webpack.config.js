const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function () {
    const isProduction = process.env.NODE_ENV === 'production'

    return {
        mode: isProduction ? 'production' : 'development',
        entry: [
            'whatwg-fetch', //ie11 does not include fetch, nor does core-js polyfill
            '@babel/polyfill', //includes regenerator runtime (allows use of generators) and core-js
            './src/index.js'
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        optimization: {
            minimize: isProduction,
        },
        devtool: isProduction ? false : 'inline-source-map',
        resolve: {
            //Allow importing .jsx files in modules without specifying the extension
            //As convention, .jsx implies non-standard JavaScript technologies are in that file, like JSX (duh)
            //Specifying an extensions array skips webpack default of .js and .json, so have to add those back in
            extensions: ['.js', '.jsx', '.json']
        },
        plugins: [
            //HtmlWebpackPlugin automatically adds script tags for our entry points into the template
            isProduction ? new HtmlWebpackPlugin({template: './src/index.html'}) : new HtmlWebpackPlugin({template: './src/index-local.html'}),
            new CopyWebpackPlugin([
                {from: './favicon.png'},
            ]),
        ],
        module: {
            rules: [
                {
                    //This says for all .js and .jsx files, use the babel-loader to transpile
                    test: /\.(js|jsx)$/,
                    include: path.resolve(__dirname, 'src'),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                },
                {
                    //less-loader cannot stand on its own because it produces css, you must also include css-loader to handle that
                    //css-loader will put the css into the bundle as a webpack module, but it just sits there useless. you need style-loader to handle that
                    //style-loader takes the css module that css-loader added to the bundle, and attaches it to the DOM
                    test: /\.(less)$/,
                    include: path.resolve(__dirname, 'src'),
                    use: [
                        {loader: 'style-loader'},
                        {loader: 'css-loader'},
                        {loader: 'less-loader'},
                    ]
                },
                {
                    //url-loader will take imported images, base64 encode them and insert into the <img> as a data url
                    //It can optionally save it as an image file if the file size is larger than what you set as a limit
                    test: /\.png/,
                    include: path.resolve(__dirname, 'src'),
                    use: 'url-loader',
                },
            ]
        },
        devServer: {
            before: require('./api/webpack.api.stubs.js'),
            host: '0.0.0.0', //without this, server starts on localhost and isn't available via IP
        }
    }
}
