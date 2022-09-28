import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule} from "@nestjs/config"
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Post from './entities/post';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule.forRoot({
      entities:[Post]
    }),
    // ConfigModule.forRoot(
    //   {
    //     ignoreEnvFile: false,
    //     isGlobal: true,
    //     //envFilePath: `${process.cwd()}/../.env.${process.env.NODE_ENV}`,
    //   }
    // ),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'password',
    //   database: 'nest',
    //   entities: [Post],
    //   synchronize: true,
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
