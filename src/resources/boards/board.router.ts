import Router from 'koa-router';
import { Board } from './board.model';
import { BoardsService } from './board.service';

const boardRouter = new Router();


boardRouter
  .get('/boards', async ctx => {
    ctx.body = BoardsService.getAll();
  })
  .get('/boards/:id', ctx => {
    try {
      const boardId = ctx.params.id;
      const foundBoard = BoardsService.boardSearch(boardId);
      if (foundBoard === undefined) {
        throw new Error("Board not found!")
      }
      ctx.body = foundBoard
    }
    catch (e) {
      console.log(e);
      ctx.throw(404, "Board not found!")
    }

  })
  .post('/boards', ctx => {
    const board = new Board(ctx.request.body);
    ctx.response.status = 201;
    ctx.body = BoardsService.boardPost(board);
  })
  .put('/boards/:id', ctx => {
    try {
      const boardId = ctx.params.id;
      const foundBoard = BoardsService.boardSearch(boardId);
      if (foundBoard === undefined) {
        throw new Error("Board not found!")
      }
      const newOptions: Board = ctx.request.body;
      const updatedBoard = BoardsService.boardUpdate(foundBoard, newOptions);

      ctx.body = new Board(updatedBoard);
    }
    catch (e) {
      console.log(e);
      ctx.throw(404, "Board not found!")
    }
  })
  .delete('/boards/:id', ctx => {
    try {
      const boardId = ctx.params.id;
      const foundBoard = BoardsService.boardSearch(boardId);
      if (foundBoard === undefined) {
        throw new Error("Board not found!")
      }
      BoardsService.boardDelete(foundBoard);
      ctx.response.status = 204;
    }
    catch (e) {
      console.log(e);
      ctx.throw(404, "Board not found!")

    }

  })

export { boardRouter };
