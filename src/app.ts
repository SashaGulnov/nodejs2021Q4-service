import Koa from 'koa';

const app = new Koa();
import Router from 'koa-router';
import bodyParser from 'koa-body';

const rootRouter = new Router();
import { userRouter } from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';


rootRouter.get('/', ctx => {
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




module.exports = app;