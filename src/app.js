/* const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

module.exports = app;
*/

const Koa = require('koa');

const app = new Koa();
const Router = require('koa-router');
const bodyParser = require('koa-body');

const rootRouter = new Router();
const userRouter = require('./resources/users/user.router');
const boardRouter = require( './resources/boards/board.router')


rootRouter.get('/', ctx => {
  ctx.body = "hey there!";
})


app .use( bodyParser() )
    .use( rootRouter.routes() )
    .use( userRouter.routes() )
    .use( boardRouter.routes() )
    .use( rootRouter.allowedMethods() )
    .use( userRouter.allowedMethods() )
    .use( boardRouter.allowedMethods() )


    

module.exports = app;