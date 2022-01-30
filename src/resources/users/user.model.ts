import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Task } from '../tasks/task.model';

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  @OneToMany(() => Task, task => task.userId)
  id!: string;

  @Column()
  name!: string;

  @Column()
  login!: string;

  @Column({ select: false })
  password!: string;

}
