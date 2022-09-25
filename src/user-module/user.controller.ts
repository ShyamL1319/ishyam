import { Body, Controller, Delete, Get, Headers, Param, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from './interface/user';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { IsNumber, IsString } from 'class-validator';
import { Request } from 'express';

@Controller('user/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUser();
  }

  @Post()
  @UsePipes(new ValidationPipe(
  ))
  async addUser(@Body() user: UserDto) {
    return await this.userService.addUser(user);
  }

  @Delete(':name')
  deleteUser(@Headers('Cache-Controle') cc:any,@Param('name') name: string, @Req() request:Request): User[] {
    console.log(request)
    return this.userService.deleteUser(name);
  }
}
