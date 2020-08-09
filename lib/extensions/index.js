const { readdirSync } = require('fs');

for (const file of readdirSync(__dirname)) require(`./${file}`);
// Can be broke because of recursion, unchecked.