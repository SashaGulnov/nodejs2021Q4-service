import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Task } from '../tasks/task.model';
import { Columns } from '../columns/column.model';

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    @OneToMany(() => Task, task => task.userId)
    id: string;

    @Column({nullable: true})
    title: string;

    @Column('jsonb')
    columns: Columns[];
 
  constructor(
    body: Board
    ) 
    {
      if (body) {
        this.id = uuidv4();
        this.title = body.title;
        this.columns = body.columns.map((col) => new Columns(col.title, col.order));
      }
      else {
        this.id = uuidv4();
        this.title = 'Board';
        this.columns = [];
      }
  }
}