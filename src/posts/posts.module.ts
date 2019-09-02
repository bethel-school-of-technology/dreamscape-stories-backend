import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { postsController } from './posts.controller';
import { postsService } from './posts.service';
import { postSchema } from './schemas/post.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'post', schema: postSchema }])],
  controllers: [postsController],
  providers: [postsService],
  exports: [postsService],
})
export class postsModule {}
