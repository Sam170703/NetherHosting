module.exports = {
    name: "guildCreate",
    once: false,

    async execute(netherhosting, guild) {
        let servidor = netherhosting.guilds.cache.find(server => server.id === "815039537486364702");
        let canalstaff = servidor.channels.cache.find(canal => canal.id === "1054089055077400596");
        if(guild.guild.id !== servidor.id) return canalstaff.send("**:rotating_light: | ALERTA:** Actividad sospechosa detectada en mis bases de datos.\nMe han invitado a un servidor no autorizado!\n**ID del servidor no autorizado:** " + `${guild.guild.id}` + "\n**Nombre del servidor no autorizado: **" + `${guild.guild.name}` + "\n**Numero de servidores en los que estoy:** 2\nPing: <@&1054083342632505465>").catch(()=> { null; });
    }
}