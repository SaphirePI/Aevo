const { Command, Stopwatch, Type, util } = require('klasa');
const { inspect } = require('util');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_EVAL_DESCRIPTION'),
            extendedHelp: language => language.get('COMMAND_EVAL_EXTENDEDHELP'),
            usage: '',
            usageDelim: null
        });
    }

    async run(message) {
        message.send(`🏓 Websocket is ${message.client.ws.ping}ms`);
    }

};