import { usersArray } from "./user.memory";
import { TasksService } from '../tasks/task.service';
import { BoardsService } from '../boards/board.service';
import { User } from "./user.model";
import { Board } from "../boards/board.model";
import { Task } from "../tasks/task.model";
import { tasksArray } from '../tasks/task.memory'

class UsersService {
  static userSearch = (userId: User['id']): User | undefined => {
    let foundUser: User | undefined;
    foundUser = usersArray.find((user: User): void => { user.id === userId })
    return foundUser
  }

  static getAll = (): User[] => usersArray;

  static userPost = (user: User): User => {
    usersArray.push(user);
    return user;
  }



  static userUpdate = (foundUser: User, newOptions: User): User => {

    const userIndex: number = usersArray.indexOf(foundUser);

    const updatedUser: User = {
      "id": foundUser.id,
      "name": newOptions.name,
      "login": newOptions.login,
      "password": newOptions.password
    }
    usersArray[userIndex] = updatedUser
    return updatedUser;
  }

  static userDelete = (foundUser: User): typeof usersArray => {

    const userIndex: number = usersArray.indexOf(foundUser);
    usersArray.splice(userIndex, 1);
    const tasks: Task[] = [];
    const boards: Board[] = BoardsService.getAll();
    boards.map((board: Board): Task[] => {
      tasks.push(...TasksService.getAll(board.id))
      return tasks
    })
    const filteredTasks: Task[] = tasks.filter(task => task.userId === foundUser.id);
    filteredTasks.map(task => {
      const taskIndex: number = tasksArray.indexOf(task);
      tasksArray[taskIndex].userId = null
      return tasksArray;
    });

    return usersArray;
  }
}
export { UsersService }
