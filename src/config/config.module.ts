import { Module } from "@nestjs/common";
import * as dotenv  from "dotenv"
import { ConfigService } from "./config.service";


const configFactory = {
    provide: ConfigService,
    useFactory: () => { 
        dotenv.config();
        const config = new ConfigService()
        config.loadFromDotenv(process.env);
        return config
    }
}
@Module({
    imports: [],
    providers: [configFactory],
    exports: [configFactory]
})

export class ConfigModule { }