'use strict'

const redisAdapter = require('socket.io-redis');
const Redis = require('ioredis');



function connectRedisProd() { 
    return { pubClient: ClientPROD(), subClient: ClientPROD() };	
}

function connectRedisDev() {
	return { pubClient: clientDev(), subClient: clientDev() };
}

function clientDev(){
    /*return new Redis(process.env.URL_REDIS, { 
        maxRetriesPerRequest: 3,
        retryStrategy: function(times) {
            return 2000 // reconnect after 2 seconds
        },
        showFriendlyErrorStack: false
     });*/
     var rd = new Redis(process.env.redis_url, 
        {
            tls:{
                ca: Buffer.from(process.env.redis_certificado, 'base64').toString(),
                serverName: new URL(process.env.redis_url).hostname 
            },
            retryStrategy: function(times) {
                return 2000 // reconnect after 2 seconds
            },
            showFriendlyErrorStack: false
        }
    );
    rd.on('error', err => {
        console.log('Redis: FAILED')
        console.log(err)
    })

    rd.on("disconnect",()=>{
        console.log('Redis: Desconectado')
    })
    rd.on("close",()=>{
        console.log('Redis: Close')
    })
    rd.on('connect', () => {
        console.log('Redis: Nueva conexión')
    })

    return rd;
}
function ClientPROD(){

    return new Redis(process.env.redis_url, 
        {
            tls:{
                ca: Buffer.from(process.env.redis_certificado, 'base64').toString(),
                serverName: new URL(process.env.redis_url).hostname 
            },
            retryStrategy: function(times) {
                return 2000 // reconnect after 2 seconds
            },
            showFriendlyErrorStack: false
        }
    );   
    
}

function newClient(){
    return process.env.NODE_ENV == 'develop' ? clientDev() : ClientPROD();
}

exports.newAdapter = function(){
    return redisAdapter(process.env.NODE_ENV == 'develop' ? connectRedisDev() : connectRedisProd());
    //return redisAdapter(process.env.NODE_ENV == 'DEV' ? connectRedisProd() : connectRedisDev());
}

exports.newPubSub=function(){
    console.log('Redis: new PubSub')
    return newClient();
}

module.exports = newClient()