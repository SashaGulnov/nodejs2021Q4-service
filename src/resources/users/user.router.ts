import Router from 'koa-router';
import { Context } from 'koa';
import { User } from './user.model';
import { UsersService } from './user.service';


const userRouter = new Router();

userRouter
  .get('/users', async (ctx: Context): Promise<void> => {
    try {
      ctx.body = UsersService.getAllUsers()
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "User is not found";
    }
  })
  .get('/users/:id', async (ctx: Context): Promise<void> => {
    try {
      const userId: User["id"] = ctx.params.id;
      ctx.body = await UsersService.getUserById(userId)
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "User is not found";
    }
  })
  .post('/users', async (ctx: Context): Promise<void> => {
    try {
      ctx.response.status = 201;
      ctx.body = await UsersService.userPost(ctx.request.body)
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "User is not found";
    }
  })
  .put('/users/:id', async (ctx: Context): Promise<void> => {
    try {
      const userId: User["id"] = ctx.params.id;
      const newOptions: User = ctx.request.body;
      ctx.body = await UsersService.userUpdate(userId, newOptions)
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "User is not found";
    }
  })
  .delete('/users/:id', (ctx: Context): void => {
    try {
      const userId: User["id"] = ctx.params.id;
      UsersService.userDelete(userId);
      ctx.response.status = 204;
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "User is not found";
    }
  })



export { userRouter };
