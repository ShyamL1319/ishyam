import { DynamicModule, Module, NotImplementedException } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigDBData } from "../config/config.interface";
import { ConfigModule } from "../config/config.module";
import { ConfigService } from "../config/config.service";
import { DbConfigError, DbError } from "./db.error"
import { DbConfig } from "./db.interface";

@Module({
    imports: [ConfigModule],
    providers: [],
    exports: []
})

export class DatabaseModule {
    private static getConnectionOptionsSqlite(dbData: any): TypeOrmModuleOptions {
        throw new NotImplementedException(`Database type ${dbData.type} not supported`);
    }

    private static getConnectionOptions(configService: ConfigService, dbConfig: DbConfig): TypeOrmModuleOptions{
        const env = process.env;
        const dbData = {
            type: env.DB_TYPE || '',
            user: env.MYSQL_USER || '',
            pass: env.MYSQL_PASSWORD || '',
            name: env.MYSQL_DB || '',
            host: env.MYSQL_DB_HOST,
            port: parseInt(env.MYSQL_DB_PORT || 'NaN', 10),
            dialect: env.DB_DIALECT || '',
            charset: env.MYSQL_CHARSET || '',
            collate: env.MYSQL_COLLATE || '',
        }
        console.log(dbData);
        let connectionOption: TypeOrmModuleOptions;
        if (!dbData) {
            throw new DbConfigError("Database Config is missing");
        }
        switch (dbData.type) {
            case 'mysql':
                connectionOption = this.getConnectionOptionsMysql(dbData);
                break;
            default:
                throw new NotImplementedException(`Database type ${dbData.type} not supported`);
        }
        return {
            ...connectionOption,
            entities: dbConfig.entities,
            logging: true,
        };
    }

    private static getConnectionOptionsMysql(dbData: ConfigDBData): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            username: dbData.user,
            password: dbData.pass,
            name: dbData.name,
            host: dbData.host,
            port: dbData.port,
            charset: dbData.charset,
            extra: {
                collate: dbData.collate,
                dialect: dbData.dialect,
            },
        };
    }

    public static forRoot(dbConfig: DbConfig): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                TypeOrmModule.forRootAsync({
                    imports: [ConfigModule],
                    useFactory: (configService: ConfigService) => DatabaseModule.getConnectionOptions(configService, dbConfig),
                    inject: [ConfigService]
                }),
            ],
            controllers: [],
            providers: [],
            exports: []
        }
    }

}