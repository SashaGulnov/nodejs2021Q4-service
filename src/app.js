const Koa = require('koa');

const app = new Koa();
const Router = require('koa-router');
const bodyParser = require('koa-body');

const rootRouter = new Router();
const userRouter = require('./resources/users/user.router');
const boardRouter = require( './resources/boards/board.router')
const taskRouter = require( './resources/tasks/task.router')


rootRouter.get('/', ctx => {
  ctx.body = "Service is running!";
})


app .use( bodyParser() )
    .use( rootRouter.routes() )
    .use( userRouter.routes() )
    .use( boardRouter.routes() )
    .use( taskRouter.routes() )
    .use( rootRouter.allowedMethods() )
    .use( userRouter.allowedMethods() )
    .use( boardRouter.allowedMethods() )
    .use( taskRouter.allowedMethods() )


    

module.exports = app;