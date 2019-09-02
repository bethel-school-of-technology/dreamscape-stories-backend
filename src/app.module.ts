import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { postsModule } from './posts/posts.module';
import { AppController } from './app.controller';
import { postsController } from './posts/posts.controller.spec';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import config from './config/keys'
import {HttpModule} from '@nestjs/common';

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: join(__dirname, '..', 'client')}),
    MongooseModule.forRoot(config.mongoURI,{useNewUrlParser: true }),
    postsModule,
    AuthModule,
    UsersModule,
    HttpModule,
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

