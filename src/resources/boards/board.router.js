const Router = require('koa-router');
// const Board = require('./board.model');
const boardsService = require('./board.service');

const boardRouter = new Router();


boardRouter
          .get('/boards', async ctx => {
              ctx.body = boardsService.boardsArray;
            
          })
          .get('/boards/:id', ctx => {
              ctx.body = 'hello';
           
          })
          .post('/boards', ctx => {
                ctx.body = 'hello';
          })
          .put('/boards/:id', ctx => {
           ctx.body = 'hello';
          })
          .delete('/boards/:id', ctx => {
            ctx.body = 'hello';
          })
      


module.exports = boardRouter;
