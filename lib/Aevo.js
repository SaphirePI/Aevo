const { Client } = require('klasa');
const { StatusPageClient } = require('@aero/statuspage');
const { klasa, discord, aevo } = require('../config');
const { AevoStatus, DiscordStatus } = require('./util/constants').url;


require('./extensions');
require('./settings');

const { hostname } = require('os');

class Aevo extends Client {

    constructor(manager) {
        super({...klasa, ...discord });

        this.manager = manager;
        this.config = aevo;
        this.status = new StatusPageClient(AevoStatus);
        this.dstatus = new StatusPageClient(DiscordStatus);
    }

    login({ shardCount }) {
        this.console.log(`[Discord] Attempting to login on shard ${this.manager.id}/${shardCount}.`);
        this.options.shards = [this.manager.id];
        this.options.shardCount = shardCount;
        super.login();
    }

}

module.exports = Aevo;