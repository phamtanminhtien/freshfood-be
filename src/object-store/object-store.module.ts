import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectStore } from './entities/object-store.entity';
import { ObjectStoreController } from './object-store.controller';
import { ObjectStoreService } from './object-store.service';

@Module({
  imports: [TypeOrmModule.forFeature([ObjectStore])],
  controllers: [ObjectStoreController],
  providers: [ObjectStoreService],
})
export class ObjectStoreModule {}
