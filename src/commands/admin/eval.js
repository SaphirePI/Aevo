const { Command, Stopwatch, Type, util } = require('klasa');
const { inspect } = require('util');
const fetch = require('node-fetch')
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            aliases: ['ev'],
            permissionLevel: 10,
            guarded: true,
            cooldown: 1000,
            description: language => language.get('COMMAND_EVAL_DESCRIPTION'),
            extendedHelp: language => language.get('COMMAND_EVAL_EXTENDEDHELP'),
            usage: '<code:string>',
            usageDelim: null
        });
    }

    async run(message, [code]) {
        const { success, result, time, type } = await this.eval(message, code);
        const footer = util.codeBlock('ts', type);
        const output = message.language.get(success ? 'COMMAND_EVAL_OUTPUT' : 'COMMAND_EVAL_ERROR',
            time, util.codeBlock('js', result), footer);
        if ('silent' in message.flagArgs) return null;

        if (output.length > 2000) {
            const res = await fetch(`${message.client.config.hasteURL}/documents`, {
                method: "POST",
                body: result,
                headers: { "Content-Type": "text/plain" }
            });
            const haste = await res.json();
            return message.send(`${message.client.config.hasteURL}/${haste.key}.js`)
        }
        return message.send(output);
    }

    async eval(message, code) {
        // eslint-disable-next-line no-unused-vars
        const msg = message;
        const { flagArgs } = message;
        code = code.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
        code = code.replace(/\`\`\`(.*)\n(.*)\n?\`\`\`/, '$2');
        const stopwatch = new Stopwatch();
        let success, syncTime, asyncTime, result;
        let thenable = false;
        let type;
        try {
            if (flagArgs.async) code = `(async () => {\n${code}\n})();`;
            result = eval(code);
            syncTime = stopwatch.toString();
            type = new Type(result);
            if (util.isThenable(result)) {
                thenable = true;
                stopwatch.restart();
                result = await result;
                asyncTime = stopwatch.toString();
            }
            success = true;
        } catch (error) {
            if (!syncTime) syncTime = stopwatch.toString();
            if (!type) type = new Type(error);
            if (thenable && !asyncTime) asyncTime = stopwatch.toString();
            if (error && error.stack) this.client.emit('error', error.stack);
            result = error;
            success = false;
        }

        stopwatch.stop();
        if (typeof result !== 'string') {
            result = inspect(result, {
                depth: flagArgs.depth ? parseInt(flagArgs.depth) || 0 : 0,
                showHidden: Boolean(flagArgs.showHidden)
            });
        }
        return { success, type, time: this.formatTime(syncTime, asyncTime), result: util.clean(result) };
    }

    formatTime(syncTime, asyncTime) {
        return asyncTime ? `⏱ ${asyncTime}<${syncTime}>` : `⏱ ${syncTime}`;
    }

};