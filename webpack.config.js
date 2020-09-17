module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: `${__dirname}/dist`,
        // webpack-dev-serverによってビルドされたバンドル(js)は、このpublicPathで指定したパスでアクセスできる
        // 例えば、publicPath: "/dist" ならば、http://localhost:8080/dist/main.js としてブラウザからアクセスできる
        // つまり、 publicPath: "/dist" にしてindex.htmlをdistの上位ディレクトリに配置すれば、
        // dev環境・本番環境ともに、同じパスでビルドされたJSにアクセスできる
        publicPath: "/dist"
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
        contentBase: './',    // 公開するリソースのドキュメントルート
        open: true,
        watchContentBase: true  // contentBase以下に置かれたファイルに変更があった場合、ブラウザ全体をリロードする
    }
};