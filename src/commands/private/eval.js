const Discord = require('discord.js');
const { create } = require('sourcebin');
const { ownerid } = require('../../data/socket.json');


module.exports = {
    name: "eval",
    run: async(netherhosting, message, args) => {
        
        function ejecutarcomandoisOK() {
			if(!args[0]) return message.channel.send(':x: | Debes escribir algo para evaluar.\nSintaxis: `nh/eval <código a evaluar>`\nPor ejemplo: `nh/eval` message.author.id');

			//Eval
			async function enviar(mensaje) {
				return await message.channel.send(mensaje);
			};
		
			async function exec(codigo) {
				return await require('child_process').execSync(codigo);
			};
		
			function mayuscula(string) {
				string = string.replace(/[^a-z]/gi, '');
				return string[0].toUpperCase() + string.slice(1);
			};
		
			let tiempo1 = Date.now();
		
			const edit = new Discord.EmbedBuilder()
				.setDescription(':stopwatch: Evaluando...')
				.setColor('0x7289DA');
			message.channel.send({ embeds: [edit] }).then(async pito => {
				try {
					let code = args.join(' ');
					let evalued = await eval(code);
					let tipo = typeof evalued || 'Tipo no encontrado.';
					if(typeof evalued !== 'string')
						evalued = require('util').inspect(evalued, {
							depth: 0,
							maxStringLength: 2000
						});
					let txt = '' + evalued;
		
					if(txt.length >= 1024) {
						create([
							{
								content: `- - - Eval - - -\n\n${txt.replace(netherhosting.token, 'Wow, un token').replace(/(bot)/g, 'bot')}`,
								language: 'javascript'
							},
						],
						{
							title: 'Eval',
							description: 'El eval es muy largo'
						}).then(owo => {
							const embed = new Discord.EmbedBuilder()
                            .addFields([
                                {  name: ':inbox_tray: Entrada', value: `\`\`\`js\n${code.slice(0, 748)}\n\`\`\`` },
                                {  name: ':outbox_tray: Salida', value: `\`El codigo es muy largo, link:\` ${owo.url}` },
                                {  name: ':file_folder: Tipo', value: `\`\`\`js\n${mayuscula(tipo)}\n\`\`\`` },
                                {  name: ':stopwatch: Tiempo', value: `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\`` },
                            ])
							.setColor('0x7289DA');
							
		pito.edit({ embeds: [embed] });
						});
					} else {
						const embed = new Discord.EmbedBuilder()
                        .addFields([
                            {  name: ':inbox_tray: Entrada', value: `\`\`\`js\n${code.slice(0, 748)}\n\`\`\`` },
                            {  name: ':outbox_tray: Salida', value: `\`\`\`js\n${txt.replace(netherhosting.token, '🔴|No tengo la autoricacion para revelar eso.').replace(/(bot)/g, 'bot')}\n\`\`\`` },
                            {  name: ':file_folder: Tipo', value: `\`\`\`js\n${mayuscula(tipo)}\n\`\`\`` },
                            {  name: ':stopwatch: Tiempo', value: `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\`` },
                        ])
						.setColor('0x7289DA');
		pito.edit({ embeds: [embed] });
					}
				} catch (err) {
					let code = args.join(' ');
					const embed = new Discord.EmbedBuilder()
						.setAuthor({name:`Error en el eval`,iconURL: netherhosting.user.displayAvatarURL({ dynamic: true })})
						.addFields([
                            {  name: ':inbox_tray: Entrada', value: `\`\`\`js\n${code.slice(0, 748)}\n\`\`\`` },
                            {  name: ':outbox_tray: Salida', value: `\`\`\`js\n${err}\n\`\`\`` },
                            {  name: ':file_folder: Tipo', value: `\`\`\`js\nError\n\`\`\`` },
                        ])
						.setColor('0xFE2D00');
		pito.edit({ embeds: [embed] });
				};
			});
    
}
if(message.author.id !== ownerid) {
    message.reply("**:x: | PERMISO DENEGADO:** Solo el creador del bot puede usar esto!");
}
if(message.author.id === ownerid) {
    ejecutarcomandoisOK();
}
       
    }
}