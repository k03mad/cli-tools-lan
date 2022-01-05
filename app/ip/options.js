import chalk from 'chalk';

const {blue, cyan, gray, red, yellow} = chalk;

export default {
    addIndent: message => gray('⎣ ') + message,

    isNumber: string => /^[\d.]+$/i.test(string),

    colors: {
        number: cyan,
        string: yellow,
        url: blue,
        err: red,
    },
};
