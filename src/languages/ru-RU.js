const { Language, util } = require('klasa');

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
            DEFAULT: (key) => `${key} Еще не перевели на ваш язык :)`,
            COMMAND_STATUS_FOOTER: `Используй 'aevo' аргумент в команде, чтоб посмотреть статистику бота`,

            COMMAND_EVAL_ERROR: (time, output, type) => `**Ошибка**:${output}\n**Тип**:${type}\n${time}`,
            COMMAND_EVAL_OUTPUT: (time, output, type) => `**Вывод**:${output}\n**Тип**:${type}\n${time}`,
            COMMAND_DAILY_REPLY: (key) => `Вы получили свой ежедневный бонус в размере ${key} монеток!`,
            COMMAND_DAILY_COOLDOWN: (time) => `Стоп-стоп-стоп, ты уже получал свой ежедневный бонус, пожалуйста, подожди ${time}`
        }
    }

}