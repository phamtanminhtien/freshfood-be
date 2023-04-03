import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DeviceController } from './device.controller';
import { deviceProviders } from './device.providers';
import { DeviceService } from './device.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DeviceController],
  providers: [DeviceService, ...deviceProviders],
})
export class DeviceModule {}
