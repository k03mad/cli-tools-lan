export default [
    {
        default: 'https://ifconfig.me/all.json',
        remove: ['remote_host', 'method'],
    },
    {
        default: 'https://ipinfo.io',
        query: ip => `https://ipinfo.io/${ip}`,
        remove: ['readme', 'loc'],
    },
    {
        default: 'http://api.geoiplookup.net/',
        query: ip => `http://api.geoiplookup.net/?query=${ip}`,
        remove: ['latitude', 'longitude'],
        xmlPath: 'ip.results.result',
    },
];
