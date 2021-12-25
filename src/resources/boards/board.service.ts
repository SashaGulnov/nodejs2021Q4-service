import { boardsArray } from './board.memory';
import { TasksService } from '../tasks/task.service';
import { Board } from './board.model'

class BoardsService {

  /**
   * Retuns the array of all the boards
   * @returns the array of all the boards 
   */
  static getAll = (): Board[] => boardsArray;

  /**
   * Returns board - instance of class Board
   * @param boardId - id of searching board string
   * @returns foundBoard - instance of class Board
   */
  static boardSearch = (boardId: Board['id']): Board | undefined => {

    const foundBoard: Board | undefined = boardsArray.find(board => board.id === boardId);
    return foundBoard;
  }

  /**
   * Posts board and returns posted board - instance of class Board
   * @param board - board to post - instance of class Board
   * @returns posted board - instance of class Board
   */
  static boardPost = (board: Board) => {
    boardsArray.push(board);
    return board
  }


/**
 * Updates board and returns updated board - instance of class Board
 * @param foundBoard - board to update - instance of class Board
 * @param newOptions - requested object with options to update foundBoard - instance of class Board
 * @returns updated board - instance of class Board
 */
  static boardUpdate = (foundBoard: Board, newOptions: Board): Board => {

    const boardIndex = boardsArray.indexOf(foundBoard);
    const updatedBoard: Board = {
      "id": foundBoard.id,
      "title": newOptions.title,
      "columns": newOptions.columns,
    }
    boardsArray[boardIndex] = updatedBoard
    return updatedBoard;
  }

  /**
   * Deletes board, all tasks on the board and returns array of rest boards
   * @param foundBoard - board to delete - instance of class Board
   * @returns array of rest boards
   */
  static boardDelete = (foundBoard: Board): typeof boardsArray => {

    const boardIndex: number = boardsArray.indexOf(foundBoard);

    boardsArray.splice(boardIndex, 1);

    const tasks = TasksService.getAll(foundBoard.id);
    tasks.map(task => TasksService.taskDelete(task))
    return boardsArray;
  }
}

export { BoardsService }