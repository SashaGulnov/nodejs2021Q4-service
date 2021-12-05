const boardsArray = require( './board.memory' );
const tasksService = require('../tasks/task.service');
// const Board = require ('./board.model');

const getAll = () => boardsArray;

const boardSearch = (boardId) => {
  let foundBoard;
  try {
    foundBoard = boardsArray.find(board => board.id === boardId);
    return foundBoard;
  }
  catch ( e ) {
    throw new Error( e );
  }
  
}

const boardPost = (board) => {
  try {
    boardsArray.push(board);
            // console.log(board)

        // console.log(boardsArray[0].columns)

    return board
  }
  catch (e) {
    throw new Error(e);
  }
}

const boardUpdate = (foundBoard, newOptions) => {
  try {
    const boardIndex = boardsArray.indexOf( foundBoard );

        const updatedBoard = {
            "id": foundBoard.id,
            "title": newOptions.title,
            "columns": newOptions.columns,
        }

        // console.log(updatedBoard)
        
        boardsArray[boardIndex] = updatedBoard
        return updatedBoard;
  }
  catch (e) {
    throw new Error(e);
  }
}

const boardDelete = (foundBoard) => {
  try {
    const boardIndex = boardsArray.indexOf(foundBoard);

    boardsArray.splice(boardIndex, 1);

     // получить таски по userid, userid => null
    const tasks = tasksService.getAll(foundBoard.id);
    tasks.map(task => tasksService.taskDelete(task))




  }
  catch (e) {
    throw new Error(e)
  }
  return boardsArray;
}


module.exports = {getAll, boardSearch, boardPost, boardUpdate, boardDelete, boardsArray}