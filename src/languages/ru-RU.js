const { Language, util } = require('klasa');

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
            DEFAULT: (key) => `${key} Еще не перевели на ваш язык :)`,

            COMMAND_EVAL_OUTPUT: `Делаем выводы:`
        }
    }

}