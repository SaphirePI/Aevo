require('dotenv').config({
    path: process.env.NODE_ENV === 'production' ? '.env' : 'dev.env'
});
const Manager = require('../lib/Manager');
const version = process.env.npm_package_gitHead || 'dev';

new Manager().init()