const { ActivityType } = require('discord.js');

module.exports = {
    name: "ready",
    once: false,
    execute: async(netherhosting) => {
    
        var estado = "idle";
        netherhosting.user.setActivity({name: `a SamuelVM`, type: ActivityType.Listening});
        //Fuera de servicio temporalmente
        netherhosting.user.setStatus(`${estado}`);
        console.log(`Bot: ${netherhosting.user.username}\nEstado: ${estado}`);
        
    }
}