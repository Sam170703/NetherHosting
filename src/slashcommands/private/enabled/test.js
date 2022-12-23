const { SlashCommandBuilder } = require('discord.js');
const { ownerid } = require('../../../data/socket.json');
    
    module.exports = {
        data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Comando de prueba')
        .addUserOption(Option1 =>
          Option1.setName('miembro')
          .setDescription('prueba')
          .setRequired(true)),
    
    async execute(netherhosting, interaction) {
      if(interaction.user.id === `${ownerid}`) return interaction.reply({ content:"**:x: | ERROR:** Usted no tiene permiso para usar este comando. Sólo mi dueño puede usarlo.", ephemeral: true}).catch(()=> { null; });
      let user = interaction.options.getUser('miembro');
      interaction.reply("Hecho, ya puse el resultado por consola, revisa consola para ver la salida del comando.")
        console.log(user.tag);
    },
    };