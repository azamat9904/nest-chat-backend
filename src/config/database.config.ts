import { registerAs } from '@nestjs/config';

export interface DataBaseConfig {
  host: string;
  port: string;
  username: string;
  password: string;
  database: string;
}

export const databaseConfig = registerAs<DataBaseConfig>('database', () => ({
  host: '',
  port: '',
  username: '',
  password: '',
  database: '',
}));
