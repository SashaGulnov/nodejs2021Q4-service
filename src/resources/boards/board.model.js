const {v4: uuidv4} = require('uuid');

let order = 0;
class Board {
  
  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = [{ id: uuidv4(),
        title: 'COLUMN',
        order: order+=1 }]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = [];
    columns.forEach(column => { 
      this.columns.push(
        {id: uuidv4(),
        title: 'COLUMN',
        order: order+=1,
        ...column});}
    );   
     

  }

//   static toResponse(user) {
//     const { id, name, login } = user;
//     return { id, name, login };
//   }
}

module.exports = Board;
