const { SlashCommandBuilder } = require('discord.js');//con el paquete ChannelType podemos seleccionar con la opcion .addChannelTypes el tipo de canal a seleccionar
    
    module.exports = {
        data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Comando de prueba')
        .addUserOption(Option1 =>
          Option1.setName('miembro')
          .setDescription('prueba')
          .setRequired(true)),
    
    async execute(netherhosting, interaction) {
      let user = interaction.options.getUser('miembro');
      interaction.reply("Hecho, ya puse el resultado por consola, revisa consola para ver la salida del comando.")
        console.log(user.tag);
    },
    };