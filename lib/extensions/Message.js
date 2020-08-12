const { Structures } = require('discord.js');
const Responder = require('../Responder');

Structures.extend('Message', Message => {
    class AevoMessage extends Message {

        constructor(...args) {
            super(...args);
            this.responder = new Responder(this);
        }

        get exempt() {
            if (!this.guild) return false;
            if (this.guild.settings.get('mod.ignored.users').includes(this.author.id)) return true;
            if (this.guild.settings.get('mod.ignored.channels').includes(this.channel.id)) return true;
            const ignoredRoles = this.guild.settings.get('mod.ignored.roles');
            for (const role of this.member.roles.keys()) {
                if (ignoredRoles.includes(role)) return true;
            }
            return false;
        }

    }
    return AevoMessage;
});