/* const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

module.exports = { getAll };
*/
const usersArray  = require("./user.memory");


const userSearch = ( userId ) => {
    let foundUser;
    try {
        
        foundUser = usersArray.find(user => user.id === userId)
        
    }
    catch (e) {
        foundUser = e;
        throw new Error(e);
        
    }
    return foundUser
}

const getAll = () => usersArray;

const userPost = (user) => {
    try {
        usersArray.push(user);
        return user;
    }
    catch (e) {
        console.log(e);
        return e;
    }
}

const userUpdate = ( foundUser, newOptions ) => {

    try{
        const userIndex = usersArray.indexOf( foundUser );
        
        const updatedUser = {
            "id": foundUser.id,
            "name": newOptions.name,
            "login": newOptions.login,
            "password": newOptions.password
        }
        
        usersArray[userIndex] = updatedUser
        return updatedUser;
    }
    catch(e) {
        return e;
    }
}

const userDelete = ( foundUser ) => {
    try {
    const userIndex = usersArray.indexOf(foundUser);
    usersArray.splice(userIndex, 1);
    }
    catch (e) {
        throw new Error (e)
    }
    return usersArray;
}

module.exports = {userSearch, getAll, userPost, userUpdate, userDelete, usersArray}
