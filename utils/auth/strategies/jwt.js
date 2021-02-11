const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const { config } = require('../../../config/index');
const redisLib = require('../../../lib/redis');

passport.use(
    new Strategy({
        secretOrKey: config.authJwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, 
        async function(tokenPlayload, cb) {

            try {
                //Validate Token with Redis
                const requestRedis = await redisLib.traerRedis(tokenPlayload.idtk);
                if(!requestRedis){
                    return cb(boom.unauthorized(), false);
                }

                cb(null, { ...requestRedis })

            } catch (error) {
                return cb(error);
            }
        }    
    )
)