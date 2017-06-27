module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "dist/bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'ts-loader']
            },
            {
                'test': /\.(jsx?)$/,
                'loaders': ['babel'],
                'exclude': /node_modules/
            }
        ]
    }
}