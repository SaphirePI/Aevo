const { Language, util } = require('klasa');

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
            DEFAULT: (key) => `${key} Still not translated to your language yet.`,
        }
    }

}