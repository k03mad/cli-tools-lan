export default [
    {
        default: 'https://ifconfig.me/all.json',
    },
    {
        default: 'https://ipinfo.io/',
        query: ip => `https://ipinfo.io/${ip}`,
    },
    {
        default: 'http://api.geoiplookup.net/',
        query: ip => `http://api.geoiplookup.net/?query=${ip}`,
        xmlPath: 'ip.results.result',
    },
    {
        default: 'http://ip-api.com/json/',
        query: ip => `http://ip-api.com/json/${ip}`,
    },
    {
        default: 'https://ipwhois.app/json/',
        query: ip => `https://ipwhois.app/json/${ip}`,
    },
];
