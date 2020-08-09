const { hostname } = require('os');
const { version } = require('../package');
const stage = process.env.NODE_ENV === 'production' ?
    hostname().includes('staging') ?
    'staging' :
    'production' :
    'development';

module.exports = {
    prefix: {
        production: 'a.',
        staging: 's.',
        development: 'd.'
    }[stage],
    stage,
    version,
    supportServer: 'https://discord.gg/DWYyenA',
    inviteURL: 'https://saphire.io',
    repoURL: 'https://saphire.io/git',
    hasteURL: 'https://haste.saphire.io',
    dailyPoints: 100
};