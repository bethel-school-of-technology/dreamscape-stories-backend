import { Injectable } from '@nestjs/common';
import { Posts } from './interfaces/post.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Posts>) {}

  async create(createCatDto: CreatePostDto): Promise<Posts> {
    const createdPost = new this.postModel(createCatDto);
    return await createdPost.save();
  }

  async findAll(): Promise<Posts[]> {
    return await this.postModel.find().exec();
  }
}
