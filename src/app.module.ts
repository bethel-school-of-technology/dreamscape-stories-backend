import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { postsModule } from './posts/posts.module';
import { AppController } from './app.controller';
import { postsController } from './posts/posts.controller.spec';
import { AppService } from './app.service';
import { postsService } from './posts/posts.service';
import config from './config/keys'

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI),
    postsModule,
  ],
  controllers: [
    AppController,
    postsController
  ],
  providers: [
    AppService
  ]
})
export class AppModule {}

