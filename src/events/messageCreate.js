const { messages } = require('../handlers/commandHandler') 
//const { afk } = require('../handlers/afk');

module.exports = {
    name: 'messageCreate',
    once: false,
    execute: async(netherhosting, message) => {

        if(!message.guild) return;

        if(!message.channel) return;

        if(message.author.id === netherhosting.user.id) return;

      //  await afk(netherhosting, message)
        await messages(netherhosting, message)
    
    }
};