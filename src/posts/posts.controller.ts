import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CreatepostDto } from './dto/create-post.dto';
import { postsService } from './posts.service';
import { post } from './interfaces/post.interface';

@Controller('posts')
export class postsController {
  constructor(private readonly postsService: postsService) {}

  @Post('post')
  async create(@Body() createpostDto: CreatepostDto):Promise<post> {
    return this.postsService.create(createpostDto);
  }

  @Get('posts')
  async findAll(): Promise<post[]> {
    return this.postsService.findAll();
  }
  @Delete('id')
  async delete(@Param('id') id): Promise <post> {
    return this.postsService.delete(id);
  }
}