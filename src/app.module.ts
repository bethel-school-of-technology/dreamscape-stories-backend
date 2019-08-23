import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import config from './config/keys';

@Module({
  imports: [
    PostsModule,
    MongooseModule.forRoot(config.mongoURI),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client'),
  }),
],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
