import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://cluster0.1jnp73q.mongodb.net',
            {
                user: 'root',
                pass: 'EDlwCCEENu8TGlCa',
                retryWrites: true,
                w : 'majority',
                dbName: 'nest'
            })
    ],
    controllers: [],
    providers: [],
})

export class DatabaseModule { }