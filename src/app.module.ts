import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ObjectStoreModule } from './object-store/object-store.module';

@Module({
  imports: [ConfigModule.forRoot(), ObjectStoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
