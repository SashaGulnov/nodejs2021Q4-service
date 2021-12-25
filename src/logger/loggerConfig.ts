import  log4js  from "koa-log4";
import path from 'path';


const logsFolder = path.join(__dirname, '../logs');
const allLogsPath = path.join(logsFolder, '/all-logs.log');
const errorsLogsPath = path.join(logsFolder, '/errors-logs.log');

log4js.configure({
  appenders: {
    // all logs
    all: {
      type: 'file',
      filename: allLogsPath
    },
    // errors logs
    errors: {
      type: 'file',
      filename: errorsLogsPath
    }
  },
  categories: {
    default: { appenders: [ 'all' ], level: 'info' },
    errors: { appenders: [ 'errors' ], level: 'error' },
  }
});



export {log4js}