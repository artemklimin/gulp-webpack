var path = require('path');

module.exports = {
    entry: './app/js/index.js',
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};