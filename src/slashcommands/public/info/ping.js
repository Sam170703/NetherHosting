const { SlashCommandBuilder,
    EmbedBuilder } = require('discord.js');
    
    module.exports = {
        data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping del bot'),
    
    async execute(netherhosting, interaction) {
    
        const time = Date.now()
    
        interaction.reply({ embeds: 
            [new EmbedBuilder()
            .setTitle("Midiendo latencia...")
            .setDescription("Discord API: Calculando...\nTiempo de respuesta del bot: Calculando...")
            .setColor('0xff00d9')]}).then(() => {
            
            let tiempoTotal = time - Date.now()
            var resultado = Math.abs(tiempoTotal);
            
            interaction.editReply({ embeds: 
                [new EmbedBuilder()
                    .setTitle("Pong! 🏓")
                    .setDescription("`Discord API:` " +netherhosting.ws.ping+ " ms\n`Tiempo de respuesta del bot:` " +resultado+ " ms")
                    .setColor('0xff00d9')]}).catch(()=> null);
        })
    },
    };
     