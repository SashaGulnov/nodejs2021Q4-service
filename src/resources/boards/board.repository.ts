import { getRepository } from "typeorm";
import { Board } from "./board.model";

const getAll = () => getRepository(Board).find();

const getById = (id: Board['id']) => getRepository(Board).findOne({ id });

const addBoard = (board: Board) => getRepository(Board).save(board);

const updateBoard = (id: Board['id'], updateBoardData: Board) => getRepository(Board).update(id, updateBoardData);

const deleteBoard = (id: Board['id']) => getRepository(Board).delete(id);


export { getAll, getById, addBoard, updateBoard, deleteBoard };