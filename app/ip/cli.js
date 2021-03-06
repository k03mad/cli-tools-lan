'use strict';

const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const {gray} = require('chalk');

const args = [
    {
        description: `get geoip info ${gray('(default: current ip)')}`,
        name: 'ip',
        alias: 'i',
    },
    {
        description: 'print this help',
        name: 'help',
        alias: 'h',
        type: Boolean,
    },
];

module.exports = {
    args: commandLineArgs(args),
    help: commandLineUsage([
        {
            header: 'Options',
            optionList: args,
        },
    ]),
};
