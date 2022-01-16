import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Task } from '../tasks/task.model';

@Entity()
export class Columns {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Task, task => task.columnId)
    id: string;

    @Column()
    title: string;

    @Column()
    order: number;
 
  constructor(title: string, order: number) {
    this.id = uuidv4();
    this.title = title;
    this.order = order;
  }
}