import Router from 'koa-router';
import { Context } from 'koa';
import { Task } from './task.model';
import { TasksService } from './task.service';
import { Board } from '../boards/board.model';


const taskRouter = new Router();

taskRouter
  .get('/boards/:boardId/tasks', (ctx: Context): void => {
    const id: Board["id"] = ctx.params.boardId;
    ctx.body = TasksService.getAll(id);
  })
  .get('/boards/:boardId/tasks/:taskId', (ctx: Context): void => {
    try {
      const id: Task["id"] = ctx.params.taskId
      const foundTask = TasksService.taskSearch(id);
      if (foundTask === undefined) {
        throw new Error("Task not found!");
      }
      ctx.body = foundTask
    }
    catch (e) {
      ctx.throw(404, "Task not found!")
    }
  })
  .post('/boards/:boardId/tasks', (ctx: Context): void => {
    const id: Board["id"] = ctx.params.boardId;
    const task = new Task(ctx.request.body);
    task.boardId = id;
    ctx.response.status = 201;
    ctx.body = TasksService.taskPost(task);
  })
  .put('/boards/:boardId/tasks/:taskId', (ctx: Context): void => {
    try {
      const id: Task["id"] = ctx.params.taskId
      const foundTask = TasksService.taskSearch(id);
      if (foundTask === undefined) {
        throw new Error("Task not found!");
      }
      const newOptions: Task = ctx.request.body;
      const updatedTask = TasksService.taskUpdate(foundTask, newOptions);
      ctx.body = updatedTask;
    }
    catch (e) {
      ctx.throw(404, 'Task not found!')
    }
  })
  .delete('/boards/:boardId/tasks/:taskId', (ctx: Context): void => {
    try {
      const id: Task["id"] = ctx.params.taskId
      const foundTask = TasksService.taskSearch(id);
      if (foundTask === undefined) {
        throw new Error("Task not found!");
      }
      TasksService.taskDelete(foundTask);
      ctx.response.status = 204;
    }
    catch (e) {
      ctx.throw(404, 'Task not found!')
    }
  })

export { taskRouter };