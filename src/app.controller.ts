import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags("Base")
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
