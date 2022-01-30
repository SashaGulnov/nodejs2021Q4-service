import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Board } from "../boards/board.model";
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

  @ManyToOne(() => Board, board => board.columns, {
    onDelete: 'CASCADE',
  })
  board!: Board;
}