const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultWdioConfig = require('@cerner/terra-functional-testing/lib/config/wdio.conf');

const wdioConfig = defaultWdioConfig.config;

if (process.env.npm_package_name !== 'terra-framework') {
  wdioConfig.specs = [path.join(__dirname, 'packages', process.env.npm_package_name, 'tests', 'wdio', '**', '*-spec.js')];
}

const travis = process.env.TRAVIS;

if (travis) {
  wdioConfig.host = 'localhost';
}

exports.config = wdioConfig;
