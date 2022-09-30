import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response} from "express"

@Injectable()
export class AuthMiddleware implements NestMiddleware { 
    constructor() { }
    public async use(req: Request, res: Response, next: (error?: any) => void) {
        
        const { authorization } = req.headers;
        if (!authorization) { 
            throw new HttpException({message:"MISSING AUTH HEADER"},HttpStatus.BAD_REQUEST);
        }
        // this.authService.validate(authorization);
        next();
    }

    
}