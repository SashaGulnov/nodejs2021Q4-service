import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-body';
import { createConnection } from 'typeorm';
import { userRouter } from './resources/users/user.router';
import { boardRouter } from './resources/boards/board.router';
import { taskRouter } from './resources/tasks/task.router';
import { logger } from './logger/middleLogger';
import ConnectionOptions from './ormconfig';


createConnection(ConnectionOptions)
  .then(async connection => {
    // here you can start to work with your entities
    await connection.runMigrations();
  })
  .catch(error => console.log(error));



const app = new Koa();

const rootRouter = new Router();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'Internal error';
    ctx.app.emit('error', err, ctx);
  }
})


rootRouter.get('/', (ctx: Koa.Context): void => {
  ctx.body = "Service is running!";
})


app.use(bodyParser())
  .use((ctx: Koa.Context, next: Koa.Next) => {
    logger(ctx, next)
  }
  )
  .use(rootRouter.routes())
  .use(userRouter.routes())
  .use(boardRouter.routes())
  .use(taskRouter.routes())
  .use(rootRouter.allowedMethods())
  .use(userRouter.allowedMethods())
  .use(boardRouter.allowedMethods())
  .use(taskRouter.allowedMethods())


process.on("unhandledRejection", () => {
  logger(null, null);
});

process.on('uncaughtException', () => {
  logger(null, null);
});

app.on('error', (err) => {

  console.log(err);

});

export { app };