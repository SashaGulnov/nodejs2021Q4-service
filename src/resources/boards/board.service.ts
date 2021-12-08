import { boardsArray } from './board.memory';
import { TasksService } from '../tasks/task.service';
import { Board } from './board.model'

class BoardsService {

  static getAll = (): Board[] => boardsArray;

  static boardSearch = (boardId: Board['id']): Board | undefined => {
    let foundBoard: Board | undefined;
    foundBoard = boardsArray.find(board => board.id === boardId);
    return foundBoard;
  }

  static boardPost = (board: Board) => {
    boardsArray.push(board);
    return board
  }

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

  static boardDelete = (foundBoard: Board): typeof boardsArray => {

    const boardIndex: number = boardsArray.indexOf(foundBoard);

    boardsArray.splice(boardIndex, 1);

    const tasks = TasksService.getAll(foundBoard.id);
    tasks.map(task => TasksService.taskDelete(task))
    return boardsArray;
  }
}

export { BoardsService }