import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConfig, databaseConfig } from './config';
import { Config, DataBaseConfig } from './config/config.interface';
import { DatabaseType } from './config/config.enum';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      load: [appConfig, databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<Config>) => {
        const database = configService.get<DataBaseConfig>('database');
        return {
          type: database.type as DatabaseType,
          host: database.host,
          port: parseInt(database.port),
          username: database.username,
          password: database.password,
          database: database.database,
          autoLoadEntities: true,
          migrations: [__dirname + '/database/migrations/*.{ts,js}'],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
