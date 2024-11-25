import { DatabaseType } from './config.enum';

export interface AppConfig {
  port: number;
  environment: 'development' | 'production';
}

export interface DataBaseConfig {
  type: DatabaseType;
  host: string;
  port: string;
  username: string;
  password: string;
  database: string;
}

export interface Config {
  app: AppConfig;
  database: DataBaseConfig;
}
