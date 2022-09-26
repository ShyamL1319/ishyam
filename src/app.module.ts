import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import Category from './entities/category';
import Comment from './entities/Comment';
import Post from './entities/post';
import Tag from './entities/tag';
import User from './entities/user';

@Module({
  imports: [DatabaseModule.forRoot({
    entities: [
      User,
      Post,
      Tag,
      Category,
      Comment
    ]
  })],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: APP_PIPE,
    useClass: ValidationPipe
  }],
})
export class AppModule {
  constructor() { }
}
