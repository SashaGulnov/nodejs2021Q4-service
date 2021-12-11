import { usersArray } from "./user.memory";
import { TasksService } from '../tasks/task.service';
import { BoardsService } from '../boards/board.service';
import { User } from "./user.model";
import { Board } from "../boards/board.model";
import { Task } from "../tasks/task.model";
import { tasksArray } from '../tasks/task.memory'

class UsersService {
  
  /**
   * Returns the array of all the users 
   * @returns the array of all the users 
   */
  static getAll = (): User[] => usersArray;

  /**
   * Returns found user - instance of class User
   * @param userId - id of serching user string
   * @returns found user - instance of class User
   */
  static userSearch = (userId: User['id']): User | undefined => {
    
    const foundUser: User | undefined = usersArray.find((user: User) => user.id === userId)
    
    return foundUser
  }

  /**
   * Returns posted user
   * @param user - user to post - instance of class User
   * @returns posted user
   */
  static userPost = (user: User): User => {
    usersArray.push(user);
    return user;
  }

  /**
   * Updates user and returns updated user
   * @param foundUser - user to update - instance of class User
   * @param newOptions - requested object with options to update foundUser - instance of class User
   * @returns updated user
   */
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

  /**
   * Deletes user, makes userId of every Task, assigned to this user equal null and returns array of rest users  
   * @param foundUser - user to delete - instance of class User
   * @returns array of rest users 
   */
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
