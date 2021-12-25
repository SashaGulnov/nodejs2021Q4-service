import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-body';
import { userRouter } from './resources/users/user.router';
import { boardRouter } from './resources/boards/board.router';
import { taskRouter } from './resources/tasks/task.router';
import { logger } from './logger/middleLogger';


const app = new Koa();

const rootRouter = new Router();


rootRouter.get('/', (ctx: Koa.Context): void => {
  ctx.body = "Service is running!";
})


app.use(bodyParser())
  .use( ( ctx: Koa.Context, next:Koa.Next ) => {
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



  process.on('uncaughtException', (error) => {
    console.log(error);    
  })

  process.on('unhandledRejection', (error)=>{
    console.log(error);
  })


export { app };