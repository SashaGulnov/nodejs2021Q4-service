import Router from 'koa-router';
import Board from './board.model';
import boardsService from './board.service';

const boardRouter = new Router();


boardRouter
  .get('/boards', async ctx => {
    ctx.body = boardsService.getAll();
  })
  .get('/boards/:id', ctx => {
    const boardId = ctx.params.id;
    const foundBoard = boardsService.boardSearch(boardId);
    if (foundBoard === undefined) {
      ctx.throw(404, 'Board not found!')
    }
    ctx.body = foundBoard

  })
  .post('/boards', ctx => {
    const board = new Board(ctx.request.body);
    ctx.response.status = 201;
    ctx.body = boardsService.boardPost(board);
  })
  .put('/boards/:id', ctx => {
    const boardId = ctx.params.id;
    const foundBoard = boardsService.boardSearch(boardId);
    if (foundBoard === undefined) {
      ctx.throw(404, 'Board not found!')
    }
    const newOptions = ctx.request.body;
    const updatedBoard = boardsService.boardUpdate(foundBoard, newOptions);

    ctx.body = new Board(updatedBoard);

  })
  .delete('/boards/:id', ctx => {
    const boardId = ctx.params.id;
    const foundBoard = boardsService.boardSearch(boardId);
    if (foundBoard === undefined) {
      ctx.throw(404, 'Board not found!')
    }
    boardsService.boardDelete(foundBoard);
    ctx.response.status = 204;

  })



export { boardRouter };
