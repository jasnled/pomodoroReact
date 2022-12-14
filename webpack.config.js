const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('html-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js', 
        publicPath: "./"
    }
    ,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude: /node_modelus/,
                use : {
                    loader : 'babel-loader' 
                }
            },
            {

                test: /\.html$/,
                use : [
                    {
                        loader: 'html-loader'
                    }
                ]

            },
            {
                test : /\.(css|scss)$/,
                use : [
                    "style-loader",
                    "css-loader",
                    "sass-loader"

                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './public/index.html',
            filename : './index.html'
        }),
        new MiniCssExtractPlugin({
            filename : '[name].css'
        })
    ],
    mode : 'development',
    devServer : {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3003,
		historyApiFallback: true
    }
}