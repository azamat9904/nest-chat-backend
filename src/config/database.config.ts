import { registerAs } from '@nestjs/config';
import { DataBaseConfig } from './config.interface';
import * as process from 'node:process';
import { DatabaseType } from './config.enum';

export const databaseConfig = registerAs<DataBaseConfig>('database', () => ({
  type: (process.env.DATABASE_TYPE as DatabaseType) || DatabaseType.MYSQL,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
}));
