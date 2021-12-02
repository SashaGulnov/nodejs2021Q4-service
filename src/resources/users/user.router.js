/* const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

module.exports = router;
*/
const Router = require('koa-router');
const User = require('./user.model');
const userSearch = require ('./user.search');
const usersService = require('./user.service');

const userRouter = new Router({
  prefix: '/users'
});

const Memory = require('./user.memory.repository')

const {usersArray} = Memory;

userRouter
          .get('/', async ctx => {
            const users = await usersService.getAll();
            console.log(users);
           ctx.body = usersArray.map(User.toResponse);
          })
          .get('/:id', ctx => {
            const userId = ctx.params.id;
            const foundUser = userSearch(usersArray, userId);
            ctx.body = User.toResponse(foundUser);
          })
          .post('/', ctx => {
            // console.log(ctx.request.body);
            const user = new User(ctx.request.body);
            usersArray.push(user);
            ctx.response.status = 201;
            ctx.body = User.toResponse(user);
          })
          .put('/:id', ctx => {
            const userId = ctx.params.id;
            const newOptions = ctx.request.body;
            const foundUser = userSearch(usersArray, userId);
            const userIndex = usersArray.indexOf(foundUser);
            // let userToUpdate = usersArray[userIndex]

            const updatedUser = {
              "id": userId,
              "name": newOptions.name,
              "login": newOptions.login,
              "password": newOptions.password
            }

            usersArray[userIndex] = updatedUser
            
            ctx.body = User.toResponse(updatedUser);
          })
          .delete('/:id', ctx => {
            const userId = ctx.params.id;
            const foundUser = userSearch(usersArray, userId);
            const userIndex = usersArray.indexOf(foundUser);
            usersArray.splice(userIndex, 1);
            ctx.response.status = 204;
          })
      


module.exports = userRouter;
