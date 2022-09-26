import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import Post from './entities/post';

@Module({
  imports: [DatabaseModule.forRoot({
    entities: [
      Post,
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
  constructor(private dataSource: DataSource) { }
}
