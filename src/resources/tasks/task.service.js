const tasksArray = require( './task.memory' );


const getAll = (reqBoardId) => tasksArray.filter(task => task.boardId === reqBoardId);

const taskPost = ( task ) => {
  tasksArray.push( task );
  return task;
}

const taskSearch = ( taskID ) => {
   let foundTask;
  try {
    foundTask = tasksArray.find(task => task.id === taskID);

  }
  catch ( e ) {
    throw new Error( e );
  }
  return foundTask;
}

const columnSearch = (board) => {
  const columnId = board.columns;
  return columnId;
}


const taskDelete = ( foundTask ) => {
  try {
    const taskIndex = tasksArray.indexOf( foundTask );

    tasksArray.splice(taskIndex, 1);
  }
  catch (e) {
    throw new Error(e)
  }
  return tasksArray;
}
 
const taskUpdate = (foundTask, newOptions) => {
  try {
    const taskIndex = tasksArray.indexOf( foundTask );

        const updatedTask = {
            "id": foundTask.id,
            "title": newOptions.title,
            "order": newOptions.order,
            "description": newOptions.description,
            "userId": newOptions.userId,
            "boardId": newOptions.boardId,
            "columnId": newOptions.columnId
        }

        
        tasksArray[taskIndex] = updatedTask
        return updatedTask;
  }
  catch (e) {
    throw new Error(e);
  }
}


module.exports = {getAll, columnSearch, taskPost, taskSearch, taskUpdate, taskDelete,  tasksArray}