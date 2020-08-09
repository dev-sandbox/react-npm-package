var path = require('path');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js',
        sample: './Sample.js',
        utils: './utils.js'
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}