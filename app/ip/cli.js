import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';

const optionList = [
    {
        name: 'ip',
        description: '',
        alias: 'i',
    },
    {
        name: 'domain',
        description: '',
        alias: 'd',
    },
    {
        name: 'help',
        alias: 'h',
        type: Boolean,
    },
];

export default {
    args: commandLineArgs(optionList),
    help: commandLineUsage([{optionList, hide: 'help'}]),
};
