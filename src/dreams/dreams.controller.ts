import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CreateDreamDto } from './dto/create-dream.dto';
import { DreamsService } from './dreams.service';
import { Dream } from './interfaces/dream.interface';

@Controller('dreams')
export class DreamsController {
  constructor(private readonly dreamsService: DreamsService) {}

  @Post()
  async create(@Body() createDreamDto: CreateDreamDto):Promise<Dream> {
    return this.dreamsService.create(createDreamDto);
  }

  @Get()
  async findAll(): Promise<Dream[]> {
    return this.dreamsService.findAll();
  }
  @Delete('id')
  async delete(@Param('id') id): Promise <Dream> {
    return this.dreamsService.delete(id);
  }
}

