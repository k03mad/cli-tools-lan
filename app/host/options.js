'use strict';

const {blue, green, gray, magenta, red, yellow, cyan} = require('chalk');

module.exports = {
    /* eslint-disable jsdoc/require-jsdoc */

    addIndent: message => gray('⎣ ') + message,

    ipColor: blue,
    valueColor: green,
    timeColor: cyan,
    warningColor: yellow,
    errorColor: red,

    scanMessageColor: magenta,
    scanMessageSeparator: '—',

    arp: 'arp -a -n',
    noArp: 'ip neigh show dev wlan0',

    nmapPing: ip => `nmap -sn ${ip}`,
    nmapTimeoutPing: 1 * 60_000,

    nmapLite: ip => `nmap -Pn -T4 ${ip}`,
    nmapTimeoutLite: 2 * 60_000,

    nmapFull: ip => `nmap -Pn -sV -T4 ${ip}`,
    nmapTimeoutFull: 10 * 60_000,

    nmapNewLine: /[\n\r]+/,
    nmapIp: /for ((?:\d{1,3}\.){3}\d{1,3})/,
    nmapPort: /(^\d+\/\S+)|^Service Info:/,

};
