async function boot(){
    //const netherhosting = require('/home/container/NetherHosting/src/core/client/client');
    const netherhosting = require('../client/client');
    new netherhosting().start();
}

module.exports = boot;