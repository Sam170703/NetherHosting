module.exports = {
    name: "guildMemberAdd",
    once: false,

    async execute(netherhosting, member) {
        const { ownerid } = require('/home/container/NetherHosting/src/data/socket.json');
        //const { ownerid } = require('../data/socket.json');
        if(member === netherhosting.user) return console.log("Alerta!! Actividad sospechosa detectada en mis bases de datos.\nHe sido invitado a un servidor nuevo sin su autorización!").catch(()=> { null; });
        let servidor = netherhosting.guilds.cache.find(server => server.id === "815039537486364702");
        if(!servidor) return console.log(`${propietariodelbot}` + "\nAlerta! Me han expulsado o baneado del servidor oficial de NetherHosting!").catch(()=> { null; });
        
        let canaldebienvenidas = servidor.channels.cache.find(canal => canal.id === "1054090870070194298");
        let canalstaff = servidor.channels.cache.find(canal => canal.id === "1054089055077400596");
        if(!canaldebienvenidas) {
            if(!canalstaff) return console.log("**:x: | ERROR:** Se ha producido un error interno en el sistema de bienvenidas de NetherHosting: No existe ni el canal de bienvenidas ni el del staff!!")
            canalstaff.send("**:x: | ERROR:** Se ha producido un error interno en el sistema de bienvenidas del servidor oficial de NetherHosting: No existe el canal de bienvenidas de ID `1054090870070194298`")
        } 
        
        if(member.guild.id !== servidor.id) return canalstaff.send("**:rotating_light: | ALERTA:** Actividad sospechosa detectada en mis bases de datos.\nMe han invitado a un servidor no autorizado!\n**ID del servidor no autorizado:** " + `${member.guild.id}` + "\n**Nombre del servidor no autorizado: **" + `${member.guild.name}` + "\n**Numero de servidores en los que estoy:** 2\nPing: <@&1054083342632505465>").catch(()=> { null; });
        if(!canaldebienvenidas.permissionsFor(netherhosting.user).has("ViewChannel")) return canalstaff.send("Alerta! " + `<@${ownerid}>` + " \n**:x: | ERROR:** No tengo los permisos suficientes en el canal " + `${canaldebienvenidas}` + " \nPermisos que me faltan: `ViewChannel`.").catch(()=> { null; });
        if(!canaldebienvenidas.permissionsFor(netherhosting.user).has("SendMessages")) return canalstaff.send("Alerta! " + `<@${ownerid}>` + " \n**:x: | ERROR:** No tengo los permisos suficientes en el canal " + `${canaldebienvenidas}` + " \nPermisos que me faltan: `SendMessages`.").catch(()=> { null; });
        if(!member.guild.members.me.permissions.has("Administrator")) return canaldebienvenidas.send({ content:"**:x: | ERROR:** No tengo los permisos suficientes.\nPermisos que me faltan: `Administrator`", ephemeral: true}).catch(()=> { null; });

        canaldebienvenidas.send(`${member}` + "\nBienvenid@ a NetherHosting. Por favor, lea las normas del servidor en el canal <#989538493640364082>, y no se olvide de verificarse en el canal <#1053705435435253840> para poder acceder al resto de canales del servidor.").catch(()=> { null; });

    }
}