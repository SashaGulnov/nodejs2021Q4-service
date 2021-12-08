import Router from 'koa-router';
import { Task } from './task.model';
import { TasksService } from './task.service';


const taskRouter = new Router();

taskRouter
  .get('/boards/:boardId/tasks', ctx => {
    ctx.body = TasksService.getAll(ctx.params.boardId);
  })
  .get('/boards/:boardId/tasks/:taskId', ctx => {
    try {
      const { taskId } = ctx.params
      const foundTask = TasksService.taskSearch(taskId);
      if (foundTask === undefined) {
        throw new Error("Task not found!");
      }
      ctx.body = foundTask
    }
    catch (e) {
      console.log(e);
      ctx.throw(404, "Task not found!")
    }
  })
  .post('/boards/:boardId/tasks', ctx => {
    const { boardId } = ctx.params;
    const task = new Task(ctx.request.body);
    task.boardId = boardId;
    ctx.response.status = 201;
    ctx.body = TasksService.taskPost(task);
  })
  .put('/boards/:boardId/tasks/:taskId', ctx => {
    try {
      const { taskId } = ctx.params
      const foundTask = TasksService.taskSearch(taskId);
      if (foundTask === undefined) {
        throw new Error("Task not found!");
      }
      const newOptions: Task = ctx.request.body;
      const updatedTask = TasksService.taskUpdate(foundTask, newOptions);
      ctx.body = updatedTask;
    }
    catch (e) {
      console.log(e);
      ctx.throw(404, 'Task not found!')
    }
  })
  .delete('/boards/:boardId/tasks/:taskId', ctx => {
    try {
      const { taskId } = ctx.params
      const foundTask = TasksService.taskSearch(taskId);
      if (foundTask === undefined) {
        throw new Error("Task not found!");
      }
      TasksService.taskDelete(foundTask);
      ctx.response.status = 204;
    }
    catch (e) {
      console.log(e);
      ctx.throw(404, 'Task not found!')
    }
  })

export { taskRouter };