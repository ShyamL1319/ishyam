import { Injectable } from "@nestjs/common";
import { DEFAULT_CONFIG } from "./config.default";
import { ConfigData, ConfigDBData } from "./config.interface";

@Injectable()

export class ConfigService { 
    private config: ConfigData;
    
    constructor(data: ConfigData = DEFAULT_CONFIG) { 
        this.config = data;
    }
    public loadFromDotenv(env: NodeJS.ProcessEnv): ConfigData { 
        console.log(env);
        this.config = {
            env: env.ENV || DEFAULT_CONFIG.env,
            port: env.PORT ? parseInt(env.PORT, 10) : DEFAULT_CONFIG.port,
            db: this.parseConfigFromEnv(env) || DEFAULT_CONFIG.db,
            logLevel: env.LOG_LEVEL || DEFAULT_CONFIG.logLevel
        }
        return this.config;
    }
    parseConfigFromEnv(env: NodeJS.ProcessEnv): ConfigDBData {
        return {
                type: env.DB_TYPE || '',
                user: env.MYSQL_USER || '',
                pass: env.MYSQL_PASSWORD || '',
                name: env.MYSQL_DB || '',
                host: env.MYSQL_DB_HOST,
                port: parseInt(env.MYSQL_DB_PORT || 'NaN',10),
                dialect: env.DB_DIALECT || '',
                charset: env.MYSQL_CHARSET || '',
                collate: env.MYSQL_COLLATE || '',
        }
    }

    public get(): Readonly<ConfigData> { 
        return this.config;
    }
}