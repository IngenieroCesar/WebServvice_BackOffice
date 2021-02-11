require('dotenv').config();

const config = {
    dev : process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    urlDao: process.env.URL_DAO,
    authJwtSecret: process.env.AUTH_JWT_SECRET,
    defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
    defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
    userwritetype: process.env.USERWRITETYPE,
    userwrite: process.env.USERWRITE,
    passwordwrite: process.env.PASSWORDWRITE,
    userreadtype: process.env.USERREADTYPE,
    userread: process.env.USERREAD,
    passwordread: process.env.PASSWORDREAD,
    redisUrl: process.env.REDIS_URL,
    redisPort: process.env.REDIS_PORT,
    redisCert: process.env.REDIS_CERT,
    redisTtl: process.env.REDIS_TTL,
};

module.exports = { config }