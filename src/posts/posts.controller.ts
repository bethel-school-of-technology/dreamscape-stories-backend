import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatepostDto } from './dto/create-post.dto';
import { postsService } from './posts.service';
import { post } from './interfaces/post.interface';

@Controller('posts')
export class postsController {
  constructor(private readonly postsService: postsService) {}

  @Post()
  async create(@Body() createpostDto: CreatepostDto) {
    await this.postsService.create(createpostDto);
  }

  @Get()
  async findAll(): Promise<post[]> {
    return this.postsService.findAll();
  }
}