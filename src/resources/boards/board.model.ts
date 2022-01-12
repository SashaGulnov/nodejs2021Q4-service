import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

let order = 0;

@Entity()
class Board {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    columns: {
        id: string,
        title: string,
        order: number
    }[];
 
  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = [
        { 
            id: uuidv4(),
            title: 'COLUMN',
            order: order+=1 
        }]
    } = {}) 
    {
        this.id = id;
        this.title = title;
        this.columns = [];
        columns.forEach(
            column => { 
            this.columns.push(
                {
                    ...column
                }
    ); }
    );   
     

  }

}

export {Board};
