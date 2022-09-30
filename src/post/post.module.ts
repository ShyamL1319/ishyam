import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthMiddleware } from "../shared/auth.middleware";
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

export default class PostModule implements NestModule{ 
    public configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware)
            .exclude('/auth')
            .forRoutes({path:'/', method: RequestMethod.ALL})
    }
}