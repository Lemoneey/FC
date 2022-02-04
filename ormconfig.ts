import { ConnectionOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.${process.env.NODE_ENV}.env` });

const pgConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ['dist/src/**/*.entity.js'],
    synchronize: false,
    migrations: ['dist/src/database/migrations/**/*.js'],
    cli: {
        migrationsDir: 'src/database/migrations'
    }
};

export default pgConfig;
