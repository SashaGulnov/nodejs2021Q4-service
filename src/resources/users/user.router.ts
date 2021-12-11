import Router from 'koa-router';
import { Context } from 'koa';
import { User } from './user.model';
import { UsersService } from './user.service';


const userRouter = new Router();

userRouter
  .get('/users', (ctx: Context): void => {
    const users: User[] = UsersService.getAll();
    ctx.body = users.map(User.toResponse);
  })
  .get('/users/:id', (ctx: Context): void => {
    try {
      const userId: User["id"] = ctx.params.id;
      const foundUser = UsersService.userSearch(userId);
      if (foundUser === undefined) {
        throw new Error("User is not found")
      }
      ctx.body = User.toResponse(foundUser);
    }
    catch (e) {
      ctx.throw(404, "User is not found")
    }
  })
  .post('/users', (ctx: Context): void => {
    const user: User = new User(ctx.request.body);
    const postedUser: User = UsersService.userPost(user);
    ctx.response.status = 201;
    ctx.body = User.toResponse(postedUser);
  })
  .put('/users/:id', (ctx: Context): void => {
    try {
      const userId: User["id"] = ctx.params.id;
      const newOptions: User = ctx.request.body;
      const foundUser = UsersService.userSearch(userId);
      if (foundUser === undefined) {
        throw new Error("User is not found")
      }
      const updatedUser = UsersService.userUpdate(foundUser, newOptions)

      ctx.body = User.toResponse(updatedUser);
    }
    catch (e) {
      ctx.throw(404, "User is not found")
    }
  })
  .delete('/users/:id', (ctx: Context): void => {
    try {
      const userId: User["id"] = ctx.params.id;
      const foundUser = UsersService.userSearch(userId);
      if (foundUser === undefined) {
        throw new Error("User is not found")
      }
      UsersService.userDelete(foundUser);

      ctx.response.status = 204;
    }
    catch (e) {
      ctx.throw(404, "User is not found")
    }
  })



export { userRouter };
