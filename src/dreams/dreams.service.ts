import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dream } from './interfaces/dream.interface';
import { CreateDreamDto } from './dto/create-dream.dto';

@Injectable()
export class DreamsService {
  constructor(@InjectModel('dream') private readonly dreamModel: Model<Dream>) {}

  async create(createDreamDto: CreateDreamDto): Promise<Dream> {
    const createdDream = new this.dreamModel(createDreamDto);
    return await createdDream.save();
  }

  async findAll(): Promise<Dream[]> {
    return await this.dreamModel.find().exec();
  }
  async delete(id: number): Promise<Dream> {
    return await this.dreamModel.findbyIdAndRemove(id);
  }
}