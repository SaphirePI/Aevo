/* eslint-disable no-bitwise */
const { GUILDS, GUILD_MEMBERS, GUILD_BANS, GUILD_MESSAGES, GUILD_MESSAGE_REACTIONS, GUILD_VOICE_STATES } = require('../lib/util/constants').intents;

module.exports = {
    disableEveryone: true,
    disableMentions: 'everyone',
    fetchAllMembers: false,
    partials: ['REACTION', 'MESSAGE', 'CHANNEL'],
    ws: {
        intents: GUILDS | GUILD_MEMBERS | GUILD_BANS | GUILD_MESSAGES | GUILD_MESSAGE_REACTIONS | GUILD_VOICE_STATES
    }
};