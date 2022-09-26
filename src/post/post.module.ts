import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Category from "../entities/category";
import Tag from "../entities/tag";
import User from "../entities/user";
import Post from "../entities/post";
import Comment from "../entities/Comment";
@Module({
    imports: [
        TypeOrmModule.forFeature([User,
            Post,
            Tag,
            Category,
            Comment
        ])
    ],
    providers: [],
    controllers: [],
    exports: []
})

export default class PostModule{ }