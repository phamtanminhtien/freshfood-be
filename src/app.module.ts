import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ObjectStoreModule } from './object-store/object-store.module';
import { DeviceModule } from './device/device.module';
import { EventsModule } from './event/events.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ObjectStoreModule,
    DeviceModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
