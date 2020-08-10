const { Structures } = require('discord.js');

Structures.extend('User', User => {
    class AevoUser extends User {

        constructor(...args) {
            super(...args);
        }
    }

    return AevoUser;
});