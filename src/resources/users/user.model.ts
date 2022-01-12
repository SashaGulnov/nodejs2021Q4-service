import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Returns User without password
   * @param user - object that contains id, name and login of User object 
   * @returns User without password 
   */
  static toResponse(user: { id: string; name: string; login: string }): { id: string; name: string; login: string } {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
