const { Collection } = require('discord.js');
const { readdirSync } = require("fs");
const path = require('path');

async function slashcommandHandler(netherhosting) {
  let slash = []

  netherhosting.commands = new Collection();
    const dirPath = path.resolve(__dirname, '/home/container/NetherHosting/src/slashcommands');
    //const dirPath = path.resolve(__dirname, '../slashcommands');
    const commandFolders = readdirSync(dirPath);

    for (const folder of commandFolders) {
        const dirPath2 = path.resolve(__dirname, `/home/container/NetherHosting/src/slashcommands/${folder}`);
      //const dirPath2 = path.resolve(__dirname, `../slashcommands/${folder}`);
      const subfolders = readdirSync(dirPath2)
      for (const subfolder of subfolders) {
        const dirPath3 = path.resolve(__dirname, `/home/container/NetherHosting/src/slashcommands/${folder}/${subfolder}`);
        //const dirPath3 = path.resolve(__dirname, `../slashcommands/${folder}/${subfolder}`);
         const commandFiles = readdirSync(dirPath3)
        .filter((file) => file.endsWith(".js"));
        for (const file of commandFiles) {
            const command = require(`/home/container/NetherHosting/src/slashcommands/${folder}/${subfolder}/${file}`);
          //const command = require(`../slashcommands/${folder}/${subfolder}/${file}`);
  
           if (command.data.toJSON().name){
              netherhosting.commands.set(command.data.toJSON().name, { 
              data: command.data.toJSON(),
              execute: command.execute 
          }, command);
          slash.push(command.data.toJSON())
          } else continue;
        };
      }
     

      
    };
    netherhosting.on("ready", async() => {
      await netherhosting.application.commands.set(slash)
    })
  }

  module.exports = slashcommandHandler;
