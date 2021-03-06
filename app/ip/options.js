'use strict';

const {blue, cyan, yellow, red, gray} = require('chalk');

module.exports = {
    /* eslint-disable jsdoc/require-jsdoc */

    addIndent: message => gray('⎣ ') + message,

    numbersRegExp: /^[\d ,.-]+$/i,

    numbersColor: cyan,
    othersColor: yellow,

    urlColor: blue,
    errColor: red,
};
