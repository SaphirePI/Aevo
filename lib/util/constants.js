/* eslint-disable no-bitwise */
module.exports = {
    BRAIN_MEME_ID: 93895088,
    emojis: {
        nodata: "<:nodata:742036749093437563>"
    },
    reactions: {},
    poll: {
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
        10: '🔟'
    },
    color: {
        VERY_NEGATIVE: 'C24D4D',
        NEGATIVE: 'c27d4c',
        SLIGHTLY_NEGATIVE: 'c2ae4c',
        POSITIVE: '3fb97c',
        INFORMATION: '4c87c2'
    },
    log: {
        // mod actions
        ban: {
            type: 'moderation',
            icon: 'https://cdn.discordapp.com/emojis/492978447170404353.png',
            color: 'VERY_NEGATIVE'
        },
        unban: {
            type: 'moderation',
            icon: '',
            color: 'POSITIVE'
        },
        tempban: {
            type: 'moderation',
            icon: '',
            color: 'VERY_NEGATUVE'
        },
        tempbanEnd: {
            type: 'moderation',
            icon: '',
            color: 'INFORMATION'
        },
        softban: {
            type: 'moderation',
            icon: '',
            color: 'VERY_NEGATIVE'
        },
        globalBan: {
            type: 'moderation',
            icon: '',
            color: 'VERY_NEGATIVE'
        },
        globalUnban: {
            type: 'moderation',
            icon: '',
            color: 'POSITIVE'
        },
        bulkBan: {
            type: 'moderation',
            icon: '',
            color: 'VERY_NEGATIVE'
        },
        kick: {
            type: 'moderation',
            icon: '',
            color: 'VERY_NEGATIVE'
        },
        mute: {
            type: 'moderation',
            icon: '',
            color: 'VERY_NEGATIVE'
        },
        unmute: {
            type: 'moderation',
            icon: '',
            color: 'POSITIVE'
        },
        tempmute: {
            type: 'moderation',
            icon: '',
            color: 'VERY_NEGATIVE'
        },
        tempmuteEnd: {
            type: 'moderation',
            icon: '',
            color: 'INFORMATION'
        },
        warn: {
            type: 'moderation',
            icon: '',
            color: 'NEGATIVE'
        },
        unwarn: {
            type: 'moderation',
            icon: '',
            color: 'POSITIVE'
        },

        // message logging
        messageEdited: {
            type: 'messages',
            icon: '',
            color: 'INFORMATION'
        },
        messageDeleted: {
            type: 'messages',
            icon: '',
            color: 'INFORMATION'
        },

        // member logging
        memberJoined: {
            type: 'members',
            icon: '',
            color: 'INFORMATION'
        },
        memberLeft: {
            type: 'members',
            icon: '',
            color: 'INFORMATION'
        }
    },
    // urls
    url: {
        NekoAPI: 'https://nekos.life/api/v2/img/',
        PerspectiveAPI: 'https://commentanalyzer.googleapis.com/v1alpha1/',
        ImgurAPI: 'https://api.imgur.com/3',
        KSoftBans: 'https://bans.ksoft.si/share',
        DiscordStatus: 'https://status.discord.com',
        AevoStatus: 'https://aevo.statuspage.io'
    },
    badges: [],
    regexes: {
        imgur: {
            image: /^https?:\/\/i\.imgur\.com\/(\w+)\.(?:jpg|png)$/i,
            album: /^https?:\/\/imgur\.com(?:\/a)?\/(\w+)$/i
        },
        discord: {
            cdn: /^https:\/\/cdn.discordapp.com\/attachments\/(?:\d){17,19}\/(?:\d){17,19}\/(?:.+?)(?:.png|.jpg)$/i
        },
        cancel: /^(?:cancel|stop|end)$/i,
        emoji: new RegExp(`^${require('emoji-regex')().source}$`)

    },
    intents: {
        GUILDS: 1 << 0,
        /*
         * GUILD_CREATE
         * GUILD_DELETE
         * GUILD_ROLE_CREATE
         * GUILD_ROLE_UPDATE
         * GUILD_ROLE_DELETE
         * CHANNEL_CREATE
         * CHANNEL_UPDATE
         * CHANNEL_DELETE
         * CHANNEL_PINS_UPDATE
         */
        GUILD_MEMBERS: 1 << 1,
        /*
         * GUILD_MEMBER_ADD
         * GUILD_MEMBER_UPDATE
         * GUILD_MEMBER_REMOVE
         */
        GUILD_BANS: 1 << 2,
        /*
         * GUILD_BAN_ADD
         * GUILD_BAN_REMOVE
         */
        GUILD_EMOJIS: 1 << 3,
        /*
         * GUILD_EMOJIS_UPDATE
         */
        GUILD_INTEGRATIONS: 1 << 4,
        /*
         * GUILD_INTEGRATIONS_UPDATE
         */
        GUILD_WEBHOOKS: 1 << 5,
        /*
         * WEBHOOKS_UPDATE
         */
        GUILD_INVITES: 1 << 6,
        /*
         * INVITE_CREATE
         * INVITE_DELETE
         */
        GUILD_VOICE_STATES: 1 << 7,
        /*
         * VOICE_STATE_UPDATE
         */
        GUILD_PRESENCES: 1 << 8,
        /*
         * PRESENCE_UPDATE
         */
        GUILD_MESSAGES: 1 << 9,
        /*
         * MESSAGE_CREATE
         * MESSAGE_UPDATE
         * MESSAGE_DELETE
         */
        GUILD_MESSAGE_REACTIONS: 1 << 10,
        /*
         * MESSAGE_REACTION_ADD
         * MESSAGE_REACTION_REMOVE
         * MESSAGE_REACTION_REMOVE_ALL
         * MESSAGE_REACTION_REMOVE_EMOJI
         */
        GUILD_MESSAGE_TYPING: 1 << 11,
        /*
         * TYPING_START
         */
        DIRECT_MESSAGES: 1 << 12,
        /*
         * CHANNEL_CREATE
         * MESSAGE_CREATE
         * MESSAGE_UPDATE
         * MESSAGE_DELETE
         */
        DIRECT_MESSAGE_REACTIONS: 1 << 13,
        /*
         * MESSAGE_REACTION_ADD
         * MESSAGE_REACTION_REMOVE
         * MESSAGE_REACTION_REMOVE_ALL
         * MESSAGE_REACTION_REMOVE_EMOJI
         */
        DIRECT_MESSAGE_TYPING: 1 << 14
            /*
             * TYPING_START
             */
    },

    punishments: {
        NONE: 1 << 0,
        STRIKE: 1 << 1,
        TEMPMUTE: 1 << 2,
        MUTE: 1 << 3,
        TEMPBAN: 1 << 4,
        BAN: 1 << 5
    }

};

module.exports.noop = () => {}; /* eslint-disable-line no-empty-function */

module.exports.zws = '\u200B';