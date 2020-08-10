const { Structures } = require('discord.js');

Structures.extend('GuildMember', GuildMember => {
    class AevoMember extends GuildMember {

        constructor(...args) {
            super(...args);
            this.lastContent = null;
            this.duplicateCount = 0;
        }

        mute(reason, id) {
            if (!id) id = this.guild.settings.get('mod.roles.mute');
            if (!id) return this;
            if (this.guild.roles.get(id)) this.roles.add(id, reason);
            return this;
        }

        unmute(reason) {
            const id = this.guild.settings.get('mod.roles.mute');
            if (!id) return this;
            if (this.guild.roles.get(id)) this.roles.remove(id, reason);
            return this;
        }

        dehoist() {
            this.setNickname(`⬇${this.displayName.slice(1, 32)}`).catch(() => null);
            return this;
        }

    }

    return AevoMember;
});