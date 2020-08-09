const { readdirSync } = require('fs');

for (const file of readdirSync(__dirname)) {
    if (!(file === 'index.js') && file.endsWith('.js')) {
        module.exports[file.split('.')[0]] = require(`./${file}`);
    }
}