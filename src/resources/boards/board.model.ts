import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Task } from '../tasks/task.model';
import { Columns } from '../columns/column.model';

@Entity()
export class Board {
  @PrimaryGeneratedColumn('uuid')
  @OneToMany(() => Task, task => task.userId)
  id!: string;

  @Column({ nullable: true })
  title!: string;

  @OneToMany(() => Columns, columns => columns.board, {
    cascade: true,
    eager: true,
  })
  columns!: Columns[];

}