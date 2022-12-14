const {Client, GatewayIntentBits} = require('discord.js');
const eventHandler = require('/home/container/NetherHosting/src/handlers/eventHandler');
//const eventHandler = require('../../handlers/eventHandler');
const {token} = require('/home/container/NetherHosting/src/core/token/token.json');
//const {token} = require('../token/token.json');
const slashcommandsHanlder = require('/home/container/NetherHosting/src/handlers/slashcommands');
//const slashcommandsHanlder = require('../../handlers/slashcommands');

class netherhosting extends Client{
    constructor(){
        super({ intents: 
            [GatewayIntentBits.Guilds, 
            GatewayIntentBits.GuildMessages, 
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers]});
        
    };


start(){

    eventHandler(this);
    slashcommandsHanlder(this);
    this.login(token);
};
};

module.exports = netherhosting;
