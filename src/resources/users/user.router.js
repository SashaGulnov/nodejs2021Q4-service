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

const userRouter = new Router({
  prefix: '/users'
});


userRouter
          .get('/', ctx => {
            ctx.body = 'users';
          })
          .post('/', ctx => {
            // console.log(ctx.request.body);
            const user = new User(ctx.request.body);
            ctx.response.status = 201;
            ctx.body = User.toResponse(user);
          })
      


module.exports = userRouter;
