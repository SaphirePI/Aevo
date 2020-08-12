const { Language, util } = require('klasa');

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
            DEFAULT: (key) => `${key} Still not translated to your language yet.`,
            COMMAND_STATUS_FOOTER: `Use 'aevo' argument to see other stats`,

            COMMAND_EVAL_ERROR: (time, output, type) => `**Error**:${output}\n**Type**:${type}\n${time}`,
            COMMAND_EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Type**:${type}\n${time}`,
            COMMAND_DAILY_REPLY: (key) => `You are collected your **${key}** daily coins!`,
            COMMAND_DAILY_COOLDOWN: (time) => `Stop-stop-stop, you already collected your daily bonus, wait another ${time}`
        }
    }

}