import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { postsController } from './posts.controller';
import { postsService } from './posts.service';
import { postSchema } from './schemas/post.schemas';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'post', schema: postSchema }]), 
    HttpModule,
  ],
  controllers: [postsController],
  exports: [postsService],
  providers: [postsService],
})
export class postsModule {}
