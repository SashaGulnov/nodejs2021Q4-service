import { usersArray } from "./user.memory";
import tasksService from '../tasks/task.service';
import boardsService from '../boards/board.service';
import { User } from "./user.model";


class UsersService {
  static userSearch = (userId: string): User => {
    let foundUser: User;
    try {

      foundUser = usersArray.find((user: User): void => { user.id === userId })

    }
    catch (e) {
      foundUser = e;
      throw new Error(e);

    }
    return foundUser
  }

  static getAll = () => usersArray;

  static userPost = (user) => {
    try {
      usersArray.push(user);
      return user;
    }
    catch (e) {
      return e;
    }
  }

  static userUpdate = (foundUser, newOptions) => {

    try {
      const userIndex = usersArray.indexOf(foundUser);

      const updatedUser = {
        "id": foundUser.id,
        "name": newOptions.name,
        "login": newOptions.login,
        "password": newOptions.password
      }

      usersArray[userIndex] = updatedUser
      return updatedUser;
    }
    catch (e) {
      return e;
    }
  }

  static userDelete = (foundUser) => {
    try {
      const userIndex = usersArray.indexOf(foundUser);
      usersArray.splice(userIndex, 1);
      const tasks = [];
      const boards = boardsService.getAll();
      boards.map(board => {

        tasks.push(...tasksService.getAll(board.id))
        return tasks
      })
      const filteredTasks = tasks.filter(task => task.userId === foundUser.id);
      filteredTasks.map(task => {
        const taskIndex = tasksService.tasksArray.indexOf(task);
        tasksService.tasksArray[taskIndex].userId = null
        return tasksService.tasksArray;
      });

    }
    catch (e) {
      throw new Error(e)
    }
    return usersArray;
  }
}
export { UsersService }
