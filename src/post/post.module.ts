import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Post from "../entities/post";
@Module({
    imports: [
        TypeOrmModule.forFeature([
            Post,
        ])
    ],
    providers: [],
    controllers: [],
    exports: []
})

export default class PostModule{ }