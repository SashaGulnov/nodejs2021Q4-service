const boardsArray = require( './board.memory' );
// const Board = require ('./board.model');

const getAll = () => boardsArray;

const boardSearch = (boardId) => {
  let foundBoard;
  try {
    foundBoard = boardsArray.find(board => board.id === boardId);
    
  }
  catch ( e ) {
    throw new Error( e );
  }
  return foundBoard;
}

const boardPost = (board) => {
  try {
    boardsArray.push(board);
            // console.log(board)

        // console.log(boardsArray[0].columns)

    return boardsArray
  }
  catch (e) {
    throw new Error(e);
  }
}

const boardUpdate = (foundBoard, newOptions) => {
  try {
    const boardIndex = boardsArray.indexOf( foundBoard );

        console.log(foundBoard[0].id);
        const updatedBoard = {
            "id": foundBoard[0].id,
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
  }
  catch (e) {
    throw new Error(e)
  }
  return boardsArray;
}


module.exports = {getAll, boardSearch, boardPost, boardUpdate, boardDelete, boardsArray}