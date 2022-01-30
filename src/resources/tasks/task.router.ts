import Router from 'koa-router';
import { Context } from 'koa';
import { Task } from './task.model';
import { TasksService } from './task.service';
import { Board } from '../boards/board.model';


const taskRouter = new Router();

taskRouter
  .get('/boards/:boardId/tasks', async (ctx: Context): Promise<void> => {
    const id: Board["id"] = ctx.params.boardId;
    ctx.body = await TasksService.getAllTasks(id);
  })
  .get('/boards/:boardId/tasks/:taskId', async (ctx: Context): Promise<void> => {
    try {
      const id: Task["id"] = ctx.params.taskId
      ctx.body = await TasksService.getTaskById(id)
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "Task not found!";
    }
  })
  .post('/boards/:boardId/tasks', async (ctx: Context): Promise<void> => {
    try {
      const id: Board["id"] = ctx.params.boardId;
      const task = ctx.request.body;
      ctx.response.status = 201;
      ctx.body = TasksService.taskPost(id, task);
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "Task not found!";
    }
  })
  .put('/boards/:boardId/tasks/:taskId', async (ctx: Context): Promise<void> => {
    try {
      const id: Task["id"] = ctx.params.taskId
      const newOptions: Task = ctx.request.body;
      ctx.body = await TasksService.taskPost(id, newOptions);
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "Task not found!";
    }
  })
  .delete('/boards/:boardId/tasks/:taskId', async (ctx: Context): Promise<void> => {
    try {
      const id: Task["id"] = ctx.params.taskId
      await TasksService.taskDelete(id);
      ctx.response.status = 204;
    }
    catch (e) {
      ctx.response.status = 404;
      ctx.body = "Task not found!";
    }
  })

export { taskRouter };