import { registerAs } from '@nestjs/config';
import * as process from 'node:process';
import { AppConfig } from './config.interface';

export const appConfig = registerAs<AppConfig>('app', () => ({
  port: parseInt(process.env.PORT) || 8080,
  environment:
    (process.env.NODE_ENV as 'development' | 'production') || 'development',
}));
