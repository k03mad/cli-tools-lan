#!/usr/bin/env node

import {request} from '@k03mad/util';
import _ from 'lodash';
import convert from 'xml-js';

import cli from './ip/cli.js';
import options from './ip/options.js';
import services from './ip/services.js';

if (cli.args.help) {
    console.log(cli.help);
    process.exit(0);
}

(async () => {
    const errors = [];

    if (cli.args.domain) {
        const domainWithProtocol = cli.args.domain.replace(/^(https?:\/\/)?/, 'https://');

        try {
            const {ip} = await request.got(domainWithProtocol);
            cli.args.ip = ip;
        } catch (err) {
            console.error(['', options.colors.url(domainWithProtocol), options.colors.err(err)].join('\n'));
            process.exit(1);
        }
    }

    await Promise.all(services.map(async elem => {
        let geoIpUrl = elem.default;

        try {
            if (cli.args.ip) {
                if (elem.query) {
                    geoIpUrl = elem.query(cli.args.ip);
                } else {
                    return;
                }
            }

            let {body} = await request.cache(geoIpUrl);

            if (elem.xmlPath) {
                body = Object.fromEntries(
                    Object
                        .entries(_.get(convert.xml2js(body, {compact: true}), elem.xmlPath))
                        // eslint-disable-next-line no-underscore-dangle
                        .map(([key, value]) => [key, value._text]),
                );
            }

            const output = [];
            const values = [];

            Object.entries(body).forEach(([key, value]) => {
                if (
                    value
                    && !elem.remove?.includes(key)
                    && !values.includes(value)
                ) {
                    const color = options.isNumber(value)
                        ? options.colors.number
                        : options.colors.string;

                    values.push(value);
                    output.push(options.addIndent(`${key}: ${color(value)}`));
                }
            });

            console.log(['', options.colors.url(geoIpUrl), ...output].join('\n'));
        } catch (err) {
            errors.push('', options.colors.url(geoIpUrl), options.colors.err(err));
        }
    }));

    if (errors.length > 0) {
        console.error(errors.join('\n'));
        process.exit(1);
    }
})();
