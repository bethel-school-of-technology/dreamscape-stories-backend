import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { postsModule } from './posts/posts.module';
import { AppController } from './app.controller';
import { postsController } from './posts/posts.controller.spec';
import { AppService } from './app.service';
import config from './config/keys';
import {AuthModule} from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { postsService } from './posts/posts.service';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI,{useNewUrlParser: true }),
    postsModule,
    AuthModule,
    UsersModule
  ],
  controllers: [
    AppController,
    postsController
  ],
  providers: [
    AppService,
   postsService
  ],
})
export class AppModule {}

