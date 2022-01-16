import {ConnectionOptions} from "typeorm";
import {PGPORT, DB_USERNAME, DB_PASSWORD, DB_NAME} from './common/config'


export default {
   "type": "postgres",
   "host": "localhost",
   "port": PGPORT,
   "username": DB_USERNAME,
   "password": DB_PASSWORD,
   "database": DB_NAME,
   "synchronize": false,
   "logging": false,
   "entities": [
      "src/resources/**/*model.ts"
   ],
   "migrations": [
      "src/migrations/**/*.ts"
   ],
   "cli": {
        "migrationsDir": "src/migrations"
    },
   "subscribers": [
      "src/subscriber/**/*.ts"
   ]
} as ConnectionOptions