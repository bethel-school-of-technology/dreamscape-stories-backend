import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { post } from './interfaces/post.interface';
import { CreatepostDto } from './dto/create-post.dto';

@Injectable()
export class postsService {
  constructor(@InjectModel('post') private readonly postModel: Model<post>) {}

  async create(createpostDto: CreatepostDto): Promise<post> {
    const createdpost = new this.postModel(createpostDto);
    return await createdpost.save();
  }

  async findAll(): Promise<post[]> {
    return await this.postModel.find().exec();
  }
}
