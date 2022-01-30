import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Task } from '../tasks/task.model';

@Entity()
export class Columns {
  @PrimaryGeneratedColumn('uuid')
  @OneToMany(() => Task, task => task.columnId)
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;
}