import { tasksArray } from './task.memory';
import { Task } from './task.model';
import { Board } from '../boards/board.model'

class TasksService {

    /**
     * Returns array of tasks on the board with requested ID
     * @param reqBoardId - requested board ID string
     * @returns array of tasks on the board with requested ID
     */
    static getAll = (reqBoardId: Board['id']): typeof tasksArray => {
        const filteredTasks = tasksArray.filter((task: Task) => task.boardId === reqBoardId);
        return filteredTasks

    }

    /**
     * Returns task - instance of class Task
     * @param taskID - id of searching task string
     * @returns foundTask - instance of class Task
     */
    static taskSearch = (taskID: Task['id']): Task | undefined => {
        const foundTask: Task | undefined = tasksArray.find((task: Task) => task.id === taskID);
        return foundTask;
    }

    /**
     * Returns posted task 
     * @param task - task to post - instance of class Task
     * @returns posted task - instance of class Task
     */
    static taskPost = (task: Task): Task => {
        tasksArray.push(task);
        return task;
    }

    /**
     * Deletes task and returns array of rest tasks
     * @param foundTask - task to delete - instance of class Task
     * @returns array of rest tasks
     */
    static taskDelete = (foundTask: Task): typeof tasksArray => {

        const taskIndex: number = tasksArray.indexOf(foundTask);

        tasksArray.splice(taskIndex, 1);
        return tasksArray;
    }

    /**
     * Updates task and returns updated task 
     * @param foundTask - task to update - instance of class Task
     * @param newOptions - requested object with options to update foundTask - instance of class Task
     * @returns updated task - instance of class Task 
     */
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