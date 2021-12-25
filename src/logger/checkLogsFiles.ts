import fs from 'fs';
import path from 'path';


const logsFolder = path.join(__dirname, '../logs');
const allLogsPath = path.join(logsFolder, '/all-logs.log');
const errorsLogsPath = path.join(logsFolder, '/errors-logs.log');

const upsertFile = async (name: string) => {
  try {
    // try to read file
    await fs.promises.readFile(name)
  } catch {
    // create empty file, because it wasn't found
    await fs.promises.writeFile(name, '')
  }
}

const createDir = async (dir:string) => {
  try {
    await fs.promises.access(dir, fs.constants.F_OK);
  } 
  catch {
    await fs.promises.mkdir(dir);
    upsertFile(allLogsPath);
    upsertFile(errorsLogsPath);
  }
}
createDir(logsFolder);


export {allLogsPath, errorsLogsPath}