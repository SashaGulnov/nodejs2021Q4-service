import { Context, Next } from 'koa';
import { log4js } from './loggerConfig';


const logger = async (ctx: Context, next:Next):Promise<void> => {

  const allLogger = log4js.getLogger('out');
  const errorLogger = log4js.getLogger('errors');

  await next();

  const query = JSON.stringify(ctx.query);
  const body = JSON.stringify(ctx.body);

  
  
  const status = ctx.res.statusCode;
  const output = `${ctx.req.method}  ${ctx.url}  ${query.length>3?query:'-'}  ${body.length>3?body:'-'}  ${status}`;
  
  if (status>=500) {
    errorLogger.error(output);
  }

  else if (status >=400) {
    allLogger.warn(output);
  }

  else {
    allLogger.info(output);
  }
} 

export {logger};