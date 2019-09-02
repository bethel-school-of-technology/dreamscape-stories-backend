import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { postsModule } from './posts/posts.module';
import { AppController } from './app.controller';
import { postsController } from './posts/posts.controller.spec';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DreamsController } from './dreams/dreams.controller';
import { DreamsModule } from './dreams/dreams.module';
import config from './config/keys'

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoURI,{useNewUrlParser: true }),
    postsModule,
    AuthModule,
    UsersModule,
    DreamsModule,
  ],
  controllers: [
    AppController,
    postsController,
    DreamsController,
  ],
  providers: [
    AppService,
  ]
})
export class AppModule {}

