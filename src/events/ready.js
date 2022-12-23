const { ActivityType } = require('discord.js');

module.exports = {
    name: "ready",
    once: false,
    execute: async(netherhosting) => {
    
        var estado = "online";
        netherhosting.user.setActivity({name: `/ | Bot oficial de NetherHosting`, type: ActivityType.Playing});
        //Fuera de servicio temporalmente
        netherhosting.user.setStatus(`${estado}`);
        console.log(`Bot: ${netherhosting.user.username}\nEstado: ${estado}`);
        
    }
}