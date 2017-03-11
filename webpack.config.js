module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: './src/client/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    watch: true
};