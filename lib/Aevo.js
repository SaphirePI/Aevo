const { Client } = require('klasa');

const { klasa, discord, aevo } = require('../config');
require('./extensions');
require('./settings');

const { hostname } = require('os');

class Aevo extends Client {

    constructor(manager) {
        super({...klasa, ...discord });

        this.manager = manager;
        this.config = aevo;
    }

    login({ shardCount }) {
        this.console.log(`[Discord] Attempting to login on shard ${this.manager.id}/${shardCount}.`);
        this.options.shards = [this.manager.id];
        this.options.shardCount = shardCount;
        super.login();
    }

}

module.exports = Aevo;