const express = require('express');
const passport = require('passport');
const app = express();

const { config } = require('./config/index');
// const adapter = require('./lib/redisEvents');

const { 
  logErrors, 
  errorHandler, 
  wrapErrors
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
//Api Router
const router = require('./routes/index');
router(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Example app listening on http://localhost: ${config.port}`);
});