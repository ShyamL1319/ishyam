import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Post from "../entities/Post";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";
@Module({
    imports: [
        TypeOrmModule.forFeature([
            Post,
        ])
    ],
    providers: [PostService],
    controllers: [PostController],
    exports: [TypeOrmModule]
})

export default class PostModule{ }