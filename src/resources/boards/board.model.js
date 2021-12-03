const {v4: uuidv4} = require('uuid');

class Board {
  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = {
        id: uuidv4(),
        title: 'COLUMN',
        order: 0
    }
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
    this.columns.title = columns.title;
    this.columns.order = columns.order;
  }

//   static toResponse(user) {
//     const { id, name, login } = user;
//     return { id, name, login };
//   }
}

module.exports = Board;
