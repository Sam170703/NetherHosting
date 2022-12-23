module.exports = {
    name: "guildMemberRemove",
    once: false,

    async execute(netherhosting, member) {
        const { ownerid } = require('/home/container/NetherHosting/src/data/socket.json');
        //const { ownerid } = require('../data/socket.json');
        var usuario = netherhosting.users.cache.find(user => user.id === `${member.id}`);
        if(member === netherhosting.user) return console.log("Alerta!! Actividad sospechosa detectada en mis bases de datos.\nHe sido invitado a un servidor nuevo sin su autorización!").catch(()=> { null; });
        let servidor = netherhosting.guilds.cache.find(server => server.id === "815039537486364702");
        if(!servidor) return console.log(`${propietariodelbot}` + "\nAlerta! Me han expulsado o baneado del servidor oficial de NetherHosting!").catch(()=> { null; });
        
        let canaldedespedidas = servidor.channels.cache.find(canal => canal.id === "1054091086102024253");
        let canalstaff = servidor.channels.cache.find(canal => canal.id === "1054089055077400596");
        if(!canaldedespedidas) {
            if(!canalstaff) return console.log("**:x: | ERROR:** Se ha producido un error interno en el sistema de despedidas de NetherHosting: No existe ni el canal de despedidas ni el del staff!!")
            canalstaff.send("**:x: | ERROR:** Se ha producido un error interno en el sistema de despedidas del servidor oficial de NetherHosting: No existe el canal de despedidas de ID `1054091086102024253`")
        } 
        
        if(member.guild.id !== servidor.id) return canalstaff.send("**:rotating_light: | ALERTA:** Actividad sospechosa detectada en mis bases de datos.\nMe han invitado a un servidor no autorizado!\n**ID del servidor no autorizado:** " + `${member.guild.id}` + "\n**Nombre del servidor no autorizado: **" + `${member.guild.name}` + "\n**Numero de servidores en los que estoy:** 2\nPing: <@&1054083342632505465>").catch(()=> { null; });
        if(!canaldedespedidas.permissionsFor(netherhosting.user).has("ViewChannel")) return canalstaff.send("Alerta! " + `<@${ownerid}>` + " \n**:x: | ERROR:** No tengo los permisos suficientes en el canal " + `${canaldedespedidas}` + " \nPermisos que me faltan: `ViewChannel`.").catch(()=> { null; });
        if(!canaldedespedidas.permissionsFor(netherhosting.user).has("SendMessages")) return canalstaff.send("Alerta! " + `<@${ownerid}>` + " \n**:x: | ERROR:** No tengo los permisos suficientes en el canal " + `${canaldedespedidas}` + " \nPermisos que me faltan: `SendMessages`.").catch(()=> { null; });
        if(!member.guild.members.me.permissions.has("Administrator")) return canaldebienvenidas.send({ content:"**:x: | ERROR:** No tengo los permisos suficientes.\nPermisos que me faltan: `Administrator`", ephemeral: true}).catch(()=> { null; });

        canaldedespedidas.send(`${usuario.tag} ha abandonado el servidor`).catch(()=> { null; });

    }
}