const {readdirSync} = require('fs');
const path = require('path');

async function eventHandler(netherhosting){
    const dirPath = path.resolve(__dirname, '/home/container/NetherHosting/src/events');
    //const dirPath = path.resolve(__dirname, '../events');
    const Files = readdirSync(dirPath)
    .filter((file) => file.endsWith('js'))
    .map(async(file) => {
        const event = require(`/home/container/NetherHosting/src/events/${file}`);
        //const event = require(`../events/${file}`);

        if (event.once) {
            netherhosting.once(event.name, (...args) => event.execute(netherhosting, ...args));
        } else {
            netherhosting.on(event.name, (...args) => event.execute(netherhosting, ...args));
        }
    });
};

module.exports = eventHandler;