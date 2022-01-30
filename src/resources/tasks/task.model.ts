import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from '../users/user.model';
import { Board } from '../boards/board.model';
import { Columns } from '../columns/column.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  order!: number;

  @Column()
  description!: string;

  @Column({ type: 'varchar', nullable: true })
  @ManyToOne(() => User, (user) => user.id, { onDelete: 'SET NULL' })
  userId!: string | null;

  @Column({ type: 'varchar', nullable: true })
  @ManyToOne(() => Board, (board) => board.id, { onDelete: 'CASCADE' })
  boardId!: string | null;

  @Column({ type: 'varchar', nullable: true })
  @ManyToOne(() => Columns, (column) => column.id, { onDelete: 'SET NULL' })
  columnId!: string | null;

}
