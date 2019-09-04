import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DreamsController } from './dreams.controller';
import { DreamSchema } from './schemas/dream.schema';
import { DreamsService } from './dreams.service'
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'dream', schema: DreamSchema }]), 
    HttpModule,
  ],
  controllers: [DreamsController],
  exports: [DreamsService],
  providers: [DreamsService]
})
export class DreamsModule {}
