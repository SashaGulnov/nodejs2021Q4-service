import dotenv from 'dotenv'
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

const {NODE_ENV} = process.env
const {LOG_LEVEL} = process.env
const {PORT} = process.env
const AUTH_MODE= process.env.AUTH_MODE === 'true'
const {PGPORT} = process.env
const {DB_USERNAME} = process.env
const {DB_PASSWORD} = process.env
const {DB_NAME} = process.env

export { PORT, NODE_ENV, LOG_LEVEL, AUTH_MODE, PGPORT, DB_USERNAME, DB_PASSWORD, DB_NAME };
