import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {HttpModule} from '@nestjs/common';

@Module({
  imports: [HttpModule],
  providers: [UsersService]
})
export class UsersModule {}
