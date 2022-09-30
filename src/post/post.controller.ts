import { Body, Controller, Get, Post, BadRequestException, Param, UsePipes, ValidationPipe, HttpCode, HttpStatus, UseFilters, UseInterceptors } from '@nestjs/common';

import { PostService } from './post.service';
import { PostDTO } from './post.dto';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../shared/http-exception.filter';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { ExceptionInterceptor } from '../shared/exception.interceptor';

    @Controller('post')
    @UsePipes(
        new ValidationPipe({
            whitelist: true,
            transform: true
        })    
    )
    @UseFilters(HttpExceptionFilter)
    @UseInterceptors(LoggingInterceptor,ExceptionInterceptor)
    
export class PostController {
    constructor(
        private postService: PostService,
    ) { }

    @ApiTags("Post")
    @Get('/')
    @ApiOperation({
        description:"Get All Posts"
    })
    @UsePipes(ValidationPipe)
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'OK' })
    @ApiBadRequestResponse({ description: "Bad Request" })
    @ApiInternalServerErrorResponse({description:'Inernal Server error occured'})
    async listAll() { 
        try {
          return await this.postService.findAll();
        } catch (err) {
            throw new BadRequestException(err);
        }
    }
    @ApiOperation({
        description:"Get Post By Id"
    })
    @UsePipes(ValidationPipe)
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'OK' })
    @ApiBadRequestResponse({ description: "Bad Request" })
    @ApiInternalServerErrorResponse({description:'Inernal Server error occured'})
    @ApiTags("Post")
    @Get('/:id')
    async getPost(@Param('id') id: string) {
        try {
            return await this.postService.getPostByid(id);
        } catch (err) {
            throw new BadRequestException(err);
        }
    }

    @ApiTags("Post")
    @Post('/')
    @ApiOperation({
        description: "Creating New Post"
    })
    @UsePipes(ValidationPipe)
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ description: 'OK' })
    @ApiBadRequestResponse({ description: "Bad Request" })
    @ApiInternalServerErrorResponse({ description: 'Inernal Server error occured' })
    async create(@Body() postDTO: PostDTO) {
        try {
            return await this.postService.create(postDTO);
        } catch (err) {
            throw new BadRequestException(err);
        }
    }
}