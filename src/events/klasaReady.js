const { Event } = require('klasa');

module.exports = class extends Event {

    async run() {
        if (process.env.BOOT_SINGLE !== 'false') return;
        this.client.console.log('[Aevo] Unloaded debug event.');
        this.client.events.get('debug').unload();
    }

};