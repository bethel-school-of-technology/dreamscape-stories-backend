import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Post()
    create():string {
        return 'this action adds a new post';
    }
    @Get()
    findAll(): string {
    return 'This action returns all posts';
  }
}