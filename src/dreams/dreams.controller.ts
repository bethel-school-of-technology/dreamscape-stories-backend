import { Controller, Get, Post, Body, Delete, Param, HttpStatus, Res, Query, NotFoundException } from '@nestjs/common';
import { CreateDreamDto } from './dto/create-dream.dto';
import { DreamsService } from './dreams.service';
import { Dream } from './interfaces/dream.interface';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

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
  @Delete()
    async deletedream(@Res() res, @Query('dreamID', new ValidateObjectId()) dreamID) {
        const deleteddream = await this.dreamsService.deletedream(dreamID);
        if (!deleteddream) throw new NotFoundException('dream does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'dream has been deleted!',
            dream: deleteddream
        })
    }
}

