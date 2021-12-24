import fs from 'fs';
import path from 'path';


const logsFolder = path.join(__dirname, '/logs');
const allLogsPath = path.join(logsFolder, '/all-logs.log');
const errorsLogsPath = path.join(logsFolder, '/errors-logs.log');

async function upsertFile(name: string) {
  try {
    // try to read file
    await fs.promises.readFile(name)
  } catch (error) {
    // create empty file, because it wasn't found
    await fs.promises.writeFile(name, '')
  }
}

try {
  if (!fs.existsSync(logsFolder)) {
    fs.mkdirSync(logsFolder);
    upsertFile(allLogsPath);
    upsertFile(errorsLogsPath);
  }
  upsertFile(allLogsPath);
  upsertFile(errorsLogsPath);
} catch (err) {
  console.error(err)
}

export {allLogsPath, errorsLogsPath}