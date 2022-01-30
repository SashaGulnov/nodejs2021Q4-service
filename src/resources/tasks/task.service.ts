import * as taskRepo from './task.repository';
import { Task } from './task.model';
import { Board } from '../boards/board.model'

class TasksService {

    /**
     * Returns array of tasks on the board with requested ID
     * @param boardId - requested board ID string
     * @returns array of tasks on the board with requested ID
     */
    static getAllTasks = (boardId: Board['id']) => taskRepo.getAll(boardId)

    /**
     * Returns task - instance of class Task
     * @param taskId - id of searching task string
     * @returns foundTask - instance of class Task
     */
    static getTaskById = (taskId: Task['id']) => taskRepo.getById(taskId)

    /**
     * Returns posted task 
     * @param id - id of board that consists the task
     * @param task - task to post - instance of class Task
     * @returns posted task - instance of class Task
     */
    static taskPost = (id: Board['id'], task: Task) => taskRepo.addTask(id, task)


    /**
     * Updates task and returns updated task 
     * @param id - id of task to update
     * @param newOptions - requested object with options to update foundTask - instance of class Task
     * @returns updated task - instance of class Task 
     */
    static taskUpdate = (id: Task['id'], newOptions: Task) => taskRepo.updateTask(id, newOptions)

    /**
     * Deletes task and returns array of rest tasks
     * @param id - id of task to delete 
     * @returns array of rest tasks
     */
    static taskDelete = (id: Task['id']) => taskRepo.deleteTask(id)

}


export { TasksService }