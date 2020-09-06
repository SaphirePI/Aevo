const { Client } = require('klasa');
const { NONE } = require('./util/constants').punishments;

Client.defaultGuildSchema
    .add('tags', 'any', { array: true, configurable: false })
    .add('social', folder => folder
        .add('enabled', 'boolean', { default: false })
        .add('levelupMessages', 'boolean', { default: true })
    )
    .add('welcome', folder => folder
        .add('channel', 'channel')
        .add('message', 'string')
    )
    .add('logs', folder => folder
        .add('moderation', subfolder => subfolder
            .add('channel', 'channel')
            .add('webhook', 'string')
        )
        .add('messages', subfolder => subfolder
            .add('channel', 'channel')
            .add('webhook', 'string')
        )
        .add('members', subfolder => subfolder
            .add('channel', 'channel')
            .add('webhook', 'string')
        )
    )
    .add('mod', folder => folder
        .add('roles', subfolder => subfolder
            .add('mute', 'role')
            .add('auto', 'role', { array: true })
            .add('reactionRoles', 'any', { array: true, default: [] })
            .add('bots', 'role')
        )
        .add('anti', subfolder => subfolder
            .add('duplicates', 'boolean')
            .add('invites', 'boolean')
            .add('copypastas', 'boolean')
            .add('hoisting', 'boolean')
            .add('unmentionable', 'boolean')
            .add('toxicity', 'boolean')
        )
        .add('punishments', subfolder => subfolder
            .add('duplicates', 'integer', { default: NONE })
            .add('invites', 'integer', { default: NONE })
            .add('copypastas', 'integer', { default: NONE })
            .add('toxicity', 'integer', { default: NONE })
        )
        .add('ignored', subfolder => subfolder
            .add('users', 'user', { array: true })
            .add('roles', 'role', { array: true })
            .add('channels', 'channel', { array: true })
        )
        .add('strikes', subfolder => subfolder
            .add('punishments', subsubfolder => subsubfolder
                .add('thresholds', subsubsubfolder => subsubsubfolder
                    .add('mute', 'integer', { default: -1 })
                    .add('ban', 'integer', { default: -1 })
                    .add('tempmute', 'integer', { default: -1 })
                    .add('tempban', 'integer', { default: -1 })
                )
                .add('durations', subsubsubfolder => subsubsubfolder
                    .add('mute', 'integer', { default: -1 })
                    .add('ban', 'integer', { default: -1 })
                )
            )
        )
    )
    .add('raid', folder => folder
        .add('channel', 'channel'))
    .add('stats', folder => folder
        .add('messages', 'integer', { default: 0 })
        .add('toxicity', 'float', { default: 0 })
    );



Client.defaultUserSchema
    .add('stats', folder => folder
        .add('balance', 'integer', { default: 0 })
        .add('messages', 'integer', { default: 0 })
        .add('toxicity', 'float', { default: 0 })
        .add('reputation', subfolder => subfolder
            .add('total', 'integer', { default: 0 })
            .add('individual', 'user', { array: true, default: [] })
        )
    )
    .add('lastDailyTimestamp', 'integer', { default: 0 })
    .add('lastReputationTimestamp', 'integer', { default: 0 })
    .add('badges', 'integer', { default: 0 });

Client.defaultClientSchema
    .add('keys', 'any', { default: [], array: true });