import { getRepository } from 'typeorm';
import { User } from './user.model'

const getAll = () => getRepository(User).find();

const getById = (id: User['id']) => getRepository(User).findOne({ id });

const addUser = (user: User) => getRepository(User).save(user);

const updateUser = (id: User['id'], updateUserData: User) => getRepository(User).update(id, updateUserData);

const deleteUser = (id: User['id']) => getRepository(User).delete({ id });


export { getAll, getById, addUser, updateUser, deleteUser };
