import { tasksArray } from './task.memory';
import { Task } from './task.model';
import { Board } from '../boards/board.model'

console.log(Task);
class TasksService {

    static getAll = (reqBoardId: Board['id']): typeof tasksArray => {
        const filteredTasks = tasksArray.filter((task: Task) => task.boardId === reqBoardId);
        return filteredTasks

    }

    static taskPost = (task: Task): Task => {
        tasksArray.push(task);
        return task;
    }

    static taskSearch = (taskID: Task['id']): Task | undefined => {
        let foundTask: Task | undefined;
        foundTask = tasksArray.find((task: Task) => task.id === taskID);
        return foundTask;
    }

    static taskDelete = (foundTask: Task): typeof tasksArray => {

        const taskIndex: number = tasksArray.indexOf(foundTask);

        tasksArray.splice(taskIndex, 1);
        return tasksArray;
    }

    static taskUpdate = (foundTask: Task, newOptions: Task): Task => {

        const taskIndex: number = tasksArray.indexOf(foundTask);

        const updatedTask: Task = {
            "id": foundTask.id,
            "title": newOptions.title,
            "order": newOptions.order,
            "description": newOptions.description,
            "userId": newOptions.userId,
            "boardId": newOptions.boardId,
            "columnId": newOptions.columnId
        }

        tasksArray[taskIndex] = updatedTask
        return updatedTask;

    }
}


export { TasksService }