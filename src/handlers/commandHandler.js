module.exports = {
    messages: async(netherhosting, message) => {
        const { botprefix } = require('../data/socket.json');
        const discord = require('discord.js');
        const { Collection } = require('discord.js');
        const fs = require('fs');
        const path = require('path');
        
        netherhosting.comandos = new Collection();

        const dirPath = path.resolve(__dirname, '../commands');
        let archivos = fs.readdirSync(dirPath).filter((f) => f.endsWith('.js'))
        for(var archi of archivos) {
            let comando = require("../commands/" + archi)
            netherhostingcomandos.set(comando.name, comando)
        }

        const dirPath2 = path.resolve(__dirname, '../commands/private');
        let archivos2 = fs.readdirSync(dirPath2).filter((f) => f.endsWith('.js'))
        for(var archi2 of archivos2) {
            let comando = require("../commands/private/" + archi2)
            netherhosting.comandos.set(comando.name, comando)
        }

        const dirPath3 = path.resolve(__dirname, '../commands/public');
        let archivos3 = fs.readdirSync(dirPath3).filter((f) => f.endsWith('.js'))
        for(var archi3 of archivos3) {
            let comando = require("../commands/public/" + archi3)
            netherhosting.comandos.set(comando.name, comando)
        }


        const args = message.content.slice(botprefix.length).trim().split(" ");
        const command = args.shift().toLowerCase();
         if(!message.content.startsWith(botprefix)) return;
         if(!message.channel.permissionsFor(netherhosting.user).has('SendMessages')) return message.author.send("**:x: | ERROR:** No tengo permisos suficientes. Permisos que me faltan: `SendMessages`").catch(()=>{ return;});
         if(!message.channel.permissionsFor(netherhosting.user).has('EmbedLinks')) return message.channel.send("**:x: | ERROR:** No tengo permisos suficientes. Permisos que me faltan: `EmbedLinks`").catch(()=>{ return;});
        
         let cmd = netherhosting.comandos.get(command)
            if(cmd) {
            return cmd.run(netherhosting, message, args, discord)
            }
         
    }
}