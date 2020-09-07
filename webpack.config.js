module.exports = {
    entry: {
        main: './main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        ["@babel/plugin-transform-react-jsx", {
                            pragma: 'createElement'
                        }]
                    ]
                }
            }
        }]
    },


    //使程序可读
    mode: 'development',
    optimization: {
        minimize: false
    }
    //使程序可读
}