import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { postsModule } from './posts/posts.module';
import { AppController } from './app.controller';
import { postsController } from './posts/posts.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/common';
import config from './config/keys'

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI,{useNewUrlParser: true }),
    postsModule,
    HttpModule,
    
  ],
  controllers: [
    AppController,
    postsController,
  ],
  providers: [
    AppService,
  ]
})
export class AppModule {}

