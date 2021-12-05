const Router = require('koa-router');
const User = require('./user.model');
const usersService = require('./user.service');

const userRouter = new Router();


userRouter
          .get('/users', async ctx => {
            const users = await usersService.getAll();
            ctx.body = users.map( User.toResponse );
          })
          .get('/users/:id', ctx => {
            const userId = ctx.params.id;
            const foundUser = usersService.userSearch( userId );
            ctx.body = User.toResponse( foundUser );
          })
          .post('/users', ctx => {
            const user = new User( ctx.request.body );
            const postedUser = usersService.userPost( user );
            ctx.response.status = 201;
            ctx.body = User.toResponse( postedUser );
          })
          .put('/users/:id', ctx => {
            const userId = ctx.params.id;
            const newOptions = ctx.request.body;
            const foundUser = usersService.userSearch( userId );
            const updatedUser = usersService.userUpdate( foundUser, newOptions )
            
            ctx.body = User.toResponse( updatedUser );
          })
          .delete('/users/:id', ctx => {
            const userId = ctx.params.id;
            const foundUser = usersService.userSearch( userId );
            usersService.userDelete( foundUser );
            
            ctx.response.status = 204;
          })
      


module.exports = userRouter;
