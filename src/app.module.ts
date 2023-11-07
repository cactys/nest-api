import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

// const { PG_PORT, PG_HOST, PG_USER, PG_PASSWORD, PG_DATA } = process.env;

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATA,
      models: [],
      //** создавать базы данных автоматически true:false */
      autoLoadModels: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
