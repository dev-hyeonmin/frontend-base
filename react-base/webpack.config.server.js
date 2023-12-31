const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
    name: 'server',
    entry: {
        server: path.resolve(__dirname, 'server/server.ts'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: [
        nodeExternals({
            modulesFromFile: true,
        }),
    ],
    target: 'node',
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.server.json',
                },
            },
        ],
    },
}