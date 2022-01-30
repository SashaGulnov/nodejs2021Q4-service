import * as userRepo from "./user.repository";
import { User } from "./user.model";

class UsersService {

  /**
   * Returns the array of all the users 
   * @returns the array of all the users 
   */
  static getAllUsers = () => userRepo.getAll();

  /**
   * Returns found user - instance of class User
   * @param userId - id of serching user string
   * @returns found user - instance of class User
   */
  static getUserById = (userId: User['id']) => userRepo.getById(userId)

  /**
   * Returns posted user
   * @param user - user to post - instance of class User
   * @returns posted user
   */
  static userPost = (user: User) => userRepo.addUser(user)

  /**
   * Updates user and returns updated user
   * @param id - id of user to update string
   * @param newOptions - requested object with options to update foundUser - instance of class User
   * @returns updated user
   */
  static userUpdate = (id: User['id'], newOptions: User) => userRepo.updateUser(id, newOptions)

  /**
   * Deletes user, makes userId of every Task, assigned to this user equal null and returns array of rest users  
   * @param id - id of user to delete string
   * @returns array of rest users 
   */
  static userDelete = (id: User['id']) => userRepo.deleteUser(id)
}
export { UsersService }
