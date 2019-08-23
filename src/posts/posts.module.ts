import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostSchema } from './schemas/post.schemas'

@Module({
  imports: [],
  controllers: [ PostsController ],
  providers: [ PostsService ],
})
export class PostsModule {}