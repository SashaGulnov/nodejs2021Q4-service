import Router from 'koa-router';
import { Context } from 'koa';
import { Board } from './board.model';
import { BoardsService } from './board.service';

const boardRouter = new Router();


boardRouter
  .get('/boards', async (ctx: Context): Promise<void> => {
    ctx.body = await BoardsService.getAllBoards();
  })
  .get('/boards/:id', async (ctx: Context): Promise<void> => {
    try {
      const boardId: Board["id"] = ctx.params.id;
      ctx.body = await BoardsService.getBoard(boardId);
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "Board not found!";
    }
  })
  .post('/boards', async (ctx: Context): Promise<void> => {
    try {
      ctx.response.status = 201;
      ctx.body = await BoardsService.boardPost(ctx.request.body);
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "Board not found!";
    }
  })
  .put('/boards/:id', async (ctx: Context): Promise<void> => {
    try {
      const boardId: Board["id"] = ctx.params.id;
      const newOptions: Board = ctx.request.body;
      ctx.body = await BoardsService.boardUpdate(boardId, newOptions);
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "Board not found!";
    }
  })
  .delete('/boards/:id', async (ctx: Context): Promise<void> => {
    try {
      const boardId: Board["id"] = ctx.params.id;
      await BoardsService.boardDelete(boardId);
      ctx.response.status = 204;
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "Board not found!";

    }

  })

export { boardRouter };
