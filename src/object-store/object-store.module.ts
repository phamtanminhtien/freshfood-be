import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ObjectStoreController } from './object-store.controller';
import { objectStoresProviders } from './object-store.providers';
import { ObjectStoreService } from './object-store.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ObjectStoreController],
  providers: [ObjectStoreService, ...objectStoresProviders],
})
export class ObjectStoreModule {}
