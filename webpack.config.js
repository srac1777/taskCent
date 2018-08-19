var path = require('path');

module.exports = {
    entry: './Frontend/index.jsx',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: [/\.jsx?$/],
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            },
        }]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};