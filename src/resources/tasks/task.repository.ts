import { getRepository } from "typeorm";
import { Board } from "../boards/board.model";
import { Task } from "./task.model";

const getAll = (id: Board['id']) => getRepository(Task).find({ id });

const getById = (id: Task['id']) => getRepository(Task).findOne({ id })

const addTask = (id: Board['id'], task: Task) => {

  const newTask = getRepository(Task).create(task);
  newTask.boardId = id;
  return getRepository(Task).save(task)
}

const updateTask = (id: Task['id'], updateTaskData: Task) => getRepository(Task).update(id, updateTaskData);

const deleteTask = (id: Task['id']) => getRepository(Task).delete(id);





export { getAll, getById, addTask, updateTask, deleteTask };