const { Command, Duration, constants: { TIME } } = require('klasa');
const { Message } = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_DAILY_DESCRIPTION'),
            runIn: ['text']
        });

        this.requireSocial = true;
    }

    async run(msg) {
        msg.channel.send('test')
        return;
    }

};