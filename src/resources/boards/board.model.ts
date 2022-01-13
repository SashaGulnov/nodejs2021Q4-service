import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Task } from '../tasks/task.model';
import { Columns } from '../columns/column.model';

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id: string;

    @OneToMany(() => Task, task => task.user)
    tasks: Task[] | undefined

    @Column()
    title: string;

    @Column()
    columns: Columns[];
 
  constructor(
    columns: Columns[],
    id = uuidv4(),
    title = 'BOARD'
    ) 
    {
        this.id = id;
        this.title = title;
        this.columns = columns;   
  }
}