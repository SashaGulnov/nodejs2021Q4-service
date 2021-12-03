const boardsArray = require( './board.memory' );
const Board = require ('./board.model');

boardsArray.push(new Board())
boardsArray.push(new Board())

module.exports = {boardsArray}