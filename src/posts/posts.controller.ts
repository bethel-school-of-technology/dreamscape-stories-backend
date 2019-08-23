import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Posts } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}
    @Post()
    create(@Body()createPostDto: CreatePostDto):string {
        return `Content: ${createPostDto.content}`;
    }
    @Get()
    findAll(): Posts[] {
    return this.postsService.findAll();
  }
}