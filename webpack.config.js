module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: `${__dirname}/dist`
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react'
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: 'dist',
        open: true
    }
};