import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
        console.log(`Reuest... ${req.body} ${req.params}`)
        next();
    } 
}