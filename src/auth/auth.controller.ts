import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from '../shared/user.service';
import { Payload } from '../types/payload';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UserService,
        private authService: AuthService,
    ) { }

    @ApiTags("Auth")
    @Post('login')
    async login(@Body() userDTO: LoginDTO) {
        const user = await this.userService.findByLogin(userDTO);
        const payload: Payload = {
            username: user.username
        };
        const token = await this.authService.signPayload(payload);
        return { token };
    }
    
    @ApiTags("Auth")
    @Post('register')
    async register(@Body() userDTO: RegisterDTO) {
        const user = await this.userService.create(userDTO);
        return { 'message': 'user creatd successfully' };
    }
}