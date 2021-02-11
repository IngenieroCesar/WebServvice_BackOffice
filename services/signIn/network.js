
const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const router = express.Router();

const redisLib = require('../../lib/redis');

const { config } = require('../../config');

//basic strategy
require('../../utils/auth/strategies/basic')


router.post('/', async (req, res, next) => { 
    const hostClient = req.headers['user-agent'];
    
    passport.authenticate('basic', async function(error, user){

        try {
            
            if ( error || !user ) {
               res.status(401).json(error);
            }else {
                const idtk = user.rol['_id'];

                passport.serializeUser(function(user, done) {
                    done(null, user);
                });
                  
                req.login(user, { sesion: false }, async function(error) {
                    if(error) {
                        console.log(error);
                        res.status(200).json(error);
                    }
    
                    //Este _id se almacena en redis y se usa para validar el token.
                    const idtk = user.rol['_id'];
                    const payload = {
                        idtk,
                        hostClient                    
                    }
    
                    //Generate Token
                    const token = jwt.sign(payload, config.authJwtSecret, {
                        expiresIn: '480m'    
                    });
                    //Send token client
                    return res.status(200).json({ token, user });
                    });
    
                    //Send token Redis
                    const stringUserData = JSON.stringify(user);
                    await redisLib.almacenarRedis(idtk, stringUserData);
        
            }

        } catch (error) {
            next(error);
        }
    })(req, res, next);

});

module.exports = router;