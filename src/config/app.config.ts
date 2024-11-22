import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export interface AppConfig {
  port: number;
  environment: 'development' | 'production';
}

export const appConfig = registerAs<AppConfig>('app', () => ({
  port: parseInt(process.env.PORT) || 8080,
  environment:
    (process.env.NODE_ENV as 'development' | 'production') || 'development',
}));
