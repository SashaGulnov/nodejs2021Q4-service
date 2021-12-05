const Router = require('koa-router');
const Task = require('./task.model');
const tasksService = require('./task.service');
// const boardsService = require('../boards/board.service');

const taskRouter = new Router();


taskRouter
          .get('/boards/:boardId/tasks',  ctx => {
                ctx.body = tasksService.getAll(ctx.params.boardId);
          })
          .get('/boards/:boardId/tasks/:taskId', ctx => {
                // const {boardId} = ctx.params;
                const {taskId} = ctx.params
                const foundTask = tasksService.taskSearch(taskId);
                if (foundTask === undefined) {
                  ctx.throw(404, 'Task not found!')
                  }
            ctx.body = foundTask
           
          })
          .post('/boards/:boardId/tasks', ctx => {
            const {boardId} = ctx.params;
            // const board = boardsService.boardSearch(boardId);
            // const columndId = tasksService.columnSearch(board);
            const taskRequest = ctx.request.body;
            taskRequest.boardId = boardId;
            // taskRequest.columnId = columndId;
            const task = new Task( taskRequest );
            ctx.response.status = 201;
            ctx.body = tasksService.taskPost( task );
            // console.log(tasksService.tasksArray);
            
          })
          .put('/boards/:boardId/tasks/:taskId', ctx => {
            // const {boardId} = ctx.params;
            const {taskId} = ctx.params
            // const board = boardsService.boardSearch(boardId);
            const foundTask = tasksService.taskSearch(taskId);
            if (foundTask === undefined) {
                  ctx.throw(404, 'Task not found!')
                  }
            const newOptions =  ctx.request.body;
            // console.log(newOptions.columnId);
            // const columnCheck = tasksService.columnCheck( board, newOptions.columnId)
            // if (columnCheck === undefined) {
            //       ctx.throw(404, 'Column not found!')
            //       }
            const updatedTask = tasksService.taskUpdate( foundTask, newOptions );
            

            ctx.body = new Task ( updatedTask );

          })
          .delete('/boards/:boardId/tasks/:taskId',  ctx => {
            // const {boardId} = ctx.params;
            const {taskId} = ctx.params
            const foundTask = tasksService.taskSearch(taskId);
            if (foundTask === undefined) {
                  ctx.throw(404, 'Task not found!')
                  }
            tasksService.taskDelete(foundTask);
            ctx.response.status = 204;
            
          })
      


module.exports = taskRouter;