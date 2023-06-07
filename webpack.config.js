// entry -> output

const path = require('path');


module.exports = {
    entry : './src/app.js',
    output : {
        path : path.join(__dirname,'public'),
        filename : 'bundle.js'
    },
    module : {
        rules : [ {
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',  // this makes when error occurs the error line will be shown from code we have written and not from bundle.js
    devServer : {
        contentBase : path.join(__dirname,'public'),
        
    }
};

/*
    bundle.js will contain the code similar to babel's output ie, server compatible js code

*/