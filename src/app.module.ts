import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule} from "@nestjs/config"
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Post  from './entities/Post';
import { DatabaseModule } from './database/database.module';
import PostModule from './post/post.module';
import Comment from './entities/Comment';
import User from './entities/User';
import Tag from './entities/Tag';
import Category from './entities/Category';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule.forRoot({
      entities:[Post,Comment,User,Tag,Category]
    }),
    PostModule,
    AuthModule
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() { }
}
