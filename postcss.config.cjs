const autoprefixer = require('autoprefixer');
const postCssImport = require('postcss-import');

const config = {
    plugins: [postCssImport(), autoprefixer]
};

module.exports = config;
