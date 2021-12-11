import Koa, { Context } from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-body';
import { userRouter } from './resources/users/user.router';
import { boardRouter } from './resources/boards/board.router';
import { taskRouter } from './resources/tasks/task.router';


const app = new Koa();

const rootRouter = new Router();


rootRouter.get('/', (ctx: Context): void => {
  ctx.body = "Service is running!";
})


app.use(bodyParser())
  .use(rootRouter.routes())
  .use(userRouter.routes())
  .use(boardRouter.routes())
  .use(taskRouter.routes())
  .use(rootRouter.allowedMethods())
  .use(userRouter.allowedMethods())
  .use(boardRouter.allowedMethods())
  .use(taskRouter.allowedMethods())



export { app };