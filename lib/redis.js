const { compare } = require("bcrypt");

const redis = require("redis");

const { config } = require('../config');

async function almacenarRedis(key, value) {

  return new Promise((resolve, reject) => {
    var client = redis.createClient();
    client.set(key, value, 'EX', config.redisTtl, async (errSet, resSet) => {
        console.log("err, res de set redis", errSet, resSet);
        client.quit();
        if(errSet){
          reject(null);
        }
        resolve(resSet);
    });
  });

}

async function traerRedis(key) {
  console.log(key);
  return new Promise((resolve, reject) => {
    var client = redis.createClient();
    client.get(key, async (errSet, resSet) => {
        console.log("err, res de set redis", errSet, resSet);
        client.quit();
        if(errSet){
          reject(null);
        }
        resolve(resSet);
    });
  });

}

module.exports = {
  almacenarRedis,
  traerRedis

}