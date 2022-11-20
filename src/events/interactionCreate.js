//const db = require('megadb');
//const ticketcounter = new db.crearDB('ticketcounter');
//const anticrashticketsdb = new db.crearDB('anticrashtickets');
//const registroticketscliente = new db.crearDB('registroticketscliente');
//const categoriasticketsdb = new db.crearDB('categoriastickets');
//const { ActionRowBuilder, ButtonBuilder, ChannelType, EmbedBuilder } = require('discord.js');
module.exports = {
  name: "interactionCreate",
  once: false,

  execute: async(netherhosting, interaction) => {

   
    const slashcmds = netherhosting.commands.get(interaction.commandName)
   /* if(interaction.isButton()) {
      function anticrashtickets() {
          
          async function comprobaridcliente() {
              function setvaridcliente() {
                  
                      var cliente = "client";
                      var varidcliente = "client-ticket";
                      anticrashticketsdb.set(`${cliente}.${interaction.guild.id}`, `${varidcliente}`);
                  
              }
                
                
                  var cliente = "client"
                  var idcliente = await anticrashticketsdb.obtener("client");
                    var varidcliente = "client-ticket";
                    if(idcliente) {
                      var idcliente = await anticrashticketsdb.obtener(`${cliente}.${interaction.guild.id}`);
                      var idclienteserver = await anticrashticketsdb.obtener(`${cliente}.${interaction.guild.id}`);
                      
                      if(idclienteserver) {
                          if(idcliente !== varidcliente) {
                              setvaridcliente();
                            
                            }
                            else {
                              return;
                            }
                      }
                      if(!idclienteserver) {
                          setvaridcliente();
                      }
                      
                    }
                    if(!idcliente) {
                      setvaridcliente();
                    }
                    
                   
                  
              
          }
         
          comprobaridcliente();
        
      }
      anticrashtickets();
      var cliente = "client";
      var idclient = await anticrashticketsdb.obtener(`${cliente}.${interaction.guild.id}`);
      if(interaction.customId === `${idclient}`) {
         async function sumarticketcliente() {
          var addcliente = "clientticket";
          var nticketcliente = await ticketcounter.obtener("clientticket");

          if(nticketcliente === 100) {
              ticketcounter.set("clientticket", 1);
          }
          if(nticketcliente) {
              ticketcounter.sumar("clientticket", 1);
          }
          if(!nticketcliente) {
              ticketcounter.set("clientticket", 1);
          }
          
          
         }
          async function abrirticketcliente() {
              var numeroticketcliente = await ticketcounter.obtener("clientticket");
              registroticketscliente.set(`${numeroticketcliente}`, `${interaction.user.id}`);
              const everyone = interaction.guild.roles.cache.find(role => role.name === "@everyone");
              //const staffrole = interaction.guild.roles.cache.find(role => role.id === "995350723061628928");
              const staffroledb = new db.crearDB('ticketsstaffrole');
              var staffroleid = await staffroledb.obtener(`${interaction.guild.id}`);
              var rolestaff = interaction.guild.roles.cache.get(`${staffroleid}`);
              if(rolestaff) {
                
                  var staffrole = interaction.guild.roles.cache.find(role => role.id === `${staffroleid}`);
                  var categoria = await categoriasticketsdb.obtener(`${interaction.guild.id}`);
                  interaction.guild.channels.create({
                      name: `ticket-${numeroticketcliente}`,
                      type: ChannelType.GuildText,
                      parent: `${categoria}`,
                      permissionOverwrites: [
                          {
                              id: interaction.guild.roles.everyone,
                              deny: ['ViewChannel'],
                              allow: ['SendMessages'],
                          },
                          {
                              id: interaction.user.id,
                              allow: ['ViewChannel'],
                          },
                          {
                              id: staffrole.id,
                              allow: ['ViewChannel'],
                          },
                          {
                              id: netherhosting.user.id,
                              allow: ['SendMessages', 'ViewChannel'],
                          },
                      ],
                  }).then(c => {
                      const mensaje = new EmbedBuilder()
                      .setTitle("Bienvenid@ a su ticket")
                      .setDescription("Por favor, escriba su mensaje explicando detalladamente su problema o duda y espere a ser atendido por el equipo de soporte.")
                      .setColor('0x00EAFE')
                      
                      const row = new ActionRowBuilder()
                      .addComponents(
                           new ButtonBuilder()
                          .setCustomId(`dentro-${idclient}`)
                          .setStyle(4)
                          .setLabel("Cerrar ticket")
                          .setEmoji("👋")
                         )
      
                      const row2 = new ActionRowBuilder()
                      .addComponents(
                          new ButtonBuilder()
                          .setCustomId(`dentro-${idclient}-2`)
                          .setStyle(1)
                          .setLabel("Reclamar ticket")
                          .setEmoji("📜")
                      )
                      c.send(`<@${interaction.user.id}> , este es su ticket.`);
                      c.send(`<@&${staffrole.id}> , tenemos un nuevo usuario que atender!`);
                      c.send({ embeds: [mensaje], components: [row,row2]});
                  })
              }
             if(!rolestaff) {
                var categoria = await categoriasticketsdb.obtener(`${interaction.guild.id}`);
              interaction.guild.channels.create({
                  name: `ticket-${numeroticketcliente}`,
                  type: ChannelType.GuildText,
                  parent: `${categoria}`,
                  permissionOverwrites: [
                      {
                          id: interaction.guild.roles.everyone.id,
                          deny: ['ViewChannel'],
                          allow: ['SendMessages'],
                      },
                      {
                          id: interaction.user.id,
                          allow: ['ViewChannel'],
                      },
                      {
                          id: netherhosting.user.id,
                          allow: ['SendMessages', 'ViewChannel'],
                      },
                  ],
              }).then(c => {
                  const mensaje = new EmbedBuilder()
                  .setTitle("Bienvenid@ a su ticket")
                  .setDescription("Por favor, escriba su mensaje explicando detalladamente su problema o duda y espere a ser atendido por el equipo de soporte.")
                  .setColor('0x00EAFE')
                  
                  const row = new ActionRowBuilder()
                  .addComponents(
                       new ButtonBuilder()
                      .setCustomId(`dentro-${idclient}`)
                      .setLabel("Cerrar ticket")
                      .setEmoji("👋")
                      .setStyle(4),
                     )
  
                  const row2 = new ActionRowBuilder()
                  .addComponents(
                      new ButtonBuilder()
                      .setCustomId(`dentro-${idclient}-2`)
                      .setLabel("Reclamar ticket")
                      .setEmoji("📜")
                      .setStyle(1),
                  )
                  c.send(`<@${interaction.user.id}> , este es su ticket.`);
                  c.send("Atención @everyone , tenemos un nuevo usuario que atender!");
                  c.send({ embeds: [mensaje], components: [row,row2]});
              })
             }
              
          
          interaction.reply({ content: `<@${interaction.user.id}>, su ticket ha sido creado correctamente!`, ephemeral: true });
          }
          sumarticketcliente().then((c) =>{
              abrirticketcliente();
          })
          
          
      }
     
      if(interaction.customId === `dentro-${idclient}`) {
          interaction.channel.delete();
      }
      if(interaction.customId === `dentro-${idclient}-2`)  {
          var addcliente = "clientticket"
          var usuario = interaction.user.id;
          var numeroticketcliente = await ticketcounter.obtener("clientticket");
          var creador = await registroticketscliente.obtener(`${numeroticketcliente}`);
          if(interaction.user.id === creador) {
              interaction.reply({ content: "**:x: | ERROR:** Sólo el staff puede reclamar los tickets. Y en caso de que sea usted parte del staff, no puede reclamar este ticket porque usted fue quien lo abrió.", ephemeral: true });
          }
          else {
              interaction.channel.send(`Ticket reclamado por <@${interaction.user.id}> !`);
          }
      }
     
  }*/
  if (!interaction.isCommand()) return;
  // y aqui es commands, no lo que habias puesto, el commands ya estaba definido (netherhosting.commands)
    if(!slashcmds) return;

    try {
        slashcmds.execute(netherhosting, interaction) // si usas run en un comando, usas run aqui, si usas execute en un comando usas execute aqui
    } catch(e) {
        console.error(e);
    }
  }
}

