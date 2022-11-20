const { ActivityType } = require('discord.js');

module.exports = {
    name: "ready",
    once: false,
    execute: async(netherhosting) => {
    
        var estado = "idle";
        netherhosting.user.setActivity({name: `Fuera de servicio temporalmente`, type: ActivityType.Listening});
        netherhosting.user.setStatus(`${estado}`);
        console.log(`Bot: ${netherhosting.user.username}\nEstado: ${estado}`);
        
    }
}