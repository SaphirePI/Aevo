const { Command } = require('klasa');
const { MessageEmbed, Message } = require('discord.js');
const { color: { VERY_NEGATIVE, NEGATIVE, POSITIVE, INFORMATION }, emojis: { success_tick, error } } = require('../../../lib/util/constants');


module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: language => language.get('COMMAND_STATUS_DESCRIPTION'),
            usage: '[discord|aevo]',
            aliases: ['ping']
        });

        this.colors = {
            none: POSITIVE,
            minor: NEGATIVE,
            major: VERY_NEGATIVE
        };
    }

    async run(msg, [site = 'discord']) {
        const overview = await this.client[site === 'discord' ? 'dstatus' : 'status'].summary();

        const embed = new MessageEmbed()
            .setTitle(overview.status.description)
            .setColor(this.colors[overview.status.indicator] || INFORMATION);

        const description = [`🏓 Websocket is ${msg.client.ws.ping}ms\n💾 Memory is ${Math.trunc(process.memoryUsage().rss/1024/1024) + 'MB'}\n`];
        for (const component of overview.components) {
            description.push(`${component.status === 'operational' ? success_tick : error} **${component.name}:** ${component.status.replace(/_/g, ' ')}`);
        }

        embed.setDescription(description.join('\n'));
        if (site !== 'aevo') embed.setFooter(msg.language.get('COMMAND_STATUS_FOOTER'))

        const incident = await this.client[site === 'discord' ? 'dstatus' : 'status'].incidents().then(res => res[0]);

        embed.addField('Latest Incident', `[${incident.name}](${incident.url}) (${incident.status})`);

        return msg.sendEmbed(embed);
    }

};