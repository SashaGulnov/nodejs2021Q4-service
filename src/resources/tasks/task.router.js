const Router = require('koa-router');
const Task = require('./task.model');
const tasksService = require('./task.service');

const taskRouter = new Router();


taskRouter
          .get('/boards/:boardId/tasks',  ctx => {
                ctx.body = tasksService.getAll(ctx.params.boardId);
          })
          .get('/boards/:boardId/tasks/:taskId', ctx => {
                const {taskId} = ctx.params
                const foundTask = tasksService.taskSearch(taskId);
                if (foundTask === undefined) {
                  ctx.throw(404, 'Task not found!')
                  }
            ctx.body = foundTask
           
          })
          .post('/boards/:boardId/tasks', ctx => {
            const {boardId} = ctx.params;
            const taskRequest = ctx.request.body;
            taskRequest.boardId = boardId;
            const task = new Task( taskRequest );
            ctx.response.status = 201;
            ctx.body = tasksService.taskPost( task );
            
          })
          .put('/boards/:boardId/tasks/:taskId', ctx => {
            const {taskId} = ctx.params
            const foundTask = tasksService.taskSearch(taskId);
            if (foundTask === undefined) {
                  ctx.throw(404, 'Task not found!')
                  }
            const newOptions =  ctx.request.body;
            const updatedTask = tasksService.taskUpdate( foundTask, newOptions );
            

            ctx.body = new Task ( updatedTask );

          })
          .delete('/boards/:boardId/tasks/:taskId',  ctx => {
            const {taskId} = ctx.params
            const foundTask = tasksService.taskSearch(taskId);
            if (foundTask === undefined) {
                  ctx.throw(404, 'Task not found!')
                  }
            tasksService.taskDelete(foundTask);
            ctx.response.status = 204;
            
          })
      


module.exports = taskRouter;