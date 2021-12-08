import { boardsArray } from './board.memory';
import { TasksService } from '../tasks/task.service';
import { Board } from './board.model'

class BoardsService {

  static getAll = (): Board[] => boardsArray;

  static boardSearch = (boardId) => {
    let foundBoard;
    try {
      foundBoard = boardsArray.find(board => board.id === boardId);
      return foundBoard;
    }
    catch (e) {
      throw new Error(e);
    }

  }

  static boardPost = (board) => {
    try {
      boardsArray.push(board);

      return board
    }
    catch (e) {
      throw new Error(e);
    }
  }

  static boardUpdate = (foundBoard, newOptions) => {
    try {
      const boardIndex = boardsArray.indexOf(foundBoard);

      const updatedBoard = {
        "id": foundBoard.id,
        "title": newOptions.title,
        "columns": newOptions.columns,
      }


      boardsArray[boardIndex] = updatedBoard
      return updatedBoard;
    }
    catch (e) {
      throw new Error(e);
    }
  }

  static boardDelete = (foundBoard) => {
    try {
      const boardIndex = boardsArray.indexOf(foundBoard);

      boardsArray.splice(boardIndex, 1);

      const tasks = TasksService.getAll(foundBoard.id);
      tasks.map(task => TasksService.taskDelete(task))




    }
    catch (e) {
      throw new Error(e)
    }
    return boardsArray;
  }
}

export { BoardsService }