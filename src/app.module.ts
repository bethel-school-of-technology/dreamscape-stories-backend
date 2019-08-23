import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
  }),
],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
