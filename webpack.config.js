const path= require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports=(
    mode:'development',
    entry: 'index.js'
    output:(
        path:path.join(__dirname, ''),
        filename: 'bundle.js'

    ),
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'index.html'
        })
    ]
)