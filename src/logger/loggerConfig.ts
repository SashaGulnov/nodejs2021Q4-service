import  log4js  from "koa-log4";
import {allLogsPath, errorsLogsPath} from './checkLogsFiles'

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