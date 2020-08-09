const { prefix, stage, owners } = require('./aevo');
const db = {
    production: 'aevo',
    staging: 'aevo-staging',
    development: 'aevo-dev'
}[stage];

const { MONGO_USER: user, MONGO_PASS: pass, MONGO_HOST: host, MONGO_PORT: port } = process.env;

module.exports = {
    commandEditing: true,
    commandLogging: true,
    console: { useColor: true },
    consoleEvents: {
        debug: stage === 'development',
        verbose: stage === 'development'
    },
    createPiecesFolders: false,
    disabledCorePieces: ['providers', 'languages', 'commands'],
    owners,
    prefix,
    providers: {
        default: 'mongodb',
        mongodb: {
            connectionString: `mongodb+srv://${user}:${pass}@${host}/`,
            db
        }
    },
    typing: false,
    readyMessage: 'Ready.'
};