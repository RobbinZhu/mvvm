const path = require('path')

module.exports = {
    entry: {
        entry: './todo.js'
    },
    output: {
        filename: './todo_build.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [],
    stats: {
        colors: true
    },
    node: {
        Buffer: false
    },
    mode: 'production'
}