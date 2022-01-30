import * as boardRepo from './board.repository';
import { Board } from './board.model'

class BoardsService {

  /**
   * Retuns the array of all the boards
   * @returns the array of all the boards 
   */
  static getAllBoards = () => boardRepo.getAll();

  /**
   * Returns board - instance of class Board
   * @param boardId - id of searching board string
   * @returns foundBoard - Promise of class Board
   */
  static getBoard = (boardId: Board['id']) => boardRepo.getById(boardId)

  /**
   * Posts board and returns posted board - instance of class Board
   * @param board - board to post - instance of class Board
   * @returns posted board - instance of class Board
   */
  static boardPost = (board: Board) => boardRepo.addBoard(board)


  /**
   * Updates board and returns updated board - instance of class Board
   * @param boardId - id of board to update 
   * @param newOptions - requested object with options to update foundBoard - instance of class Board
   * @returns updated board - instance of class Board
   */
  static boardUpdate = (boardId: Board['id'], newOptions: Board) => boardRepo.updateBoard(boardId, newOptions)

  /**
   * Deletes board, all tasks on the board and returns array of rest boards
   * @param boardId - id of board to delete
   * @returns void
   */
  static boardDelete = (boardId: Board['id']) => boardRepo.deleteBoard(boardId)
}

export { BoardsService }