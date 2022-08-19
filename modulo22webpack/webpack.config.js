//faz as importações 
const path = require ('path') 
const HtmlWebpack = require ('html-webpack-plugin') 
const MiniCssExtract = require('mini-css-extract-plugin')
// const { Template } = require('webpack')

// funções
 
module.exports = {

    entry:'./src/index.js',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname, 'dist' )
    },
    module: {
        rules: [
            {   
                test: /\.(sa|c|sc)ss$/,
                use: [
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/i,
                exclude: /nome_modules/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                use: {
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpack ({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: 'style.css'
        })
    ]
}

//npx webpack --config webpack.config.js