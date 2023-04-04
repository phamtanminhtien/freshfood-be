import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { CreateDevice } from './dto/device-create.dto';
import { UpdateDevice } from './dto/device-update.dto';

@Controller('devices')
@ApiTags('Devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post()
  async create(@Body() device: CreateDevice) {
    try {
      return this.deviceService.create(device);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async findAll() {
    try {
      return this.deviceService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    try {
      return this.deviceService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:id')
  async deleteById(@Param('id') id: string) {
    try {
      return this.deviceService.deleteById(id);
    } catch (error) {
      throw error;
    }
  }

  @Get('/serial/:serial')
  async findBySerial(@Param('serial') serial: string) {
    try {
      return this.deviceService.findBySerial(serial);
    } catch (error) {
      throw error;
    }
  }

  @Get('/owner-address/:ownerAddress')
  async findByOwnerAddress(@Param('ownerAddress') ownerAddress: string) {
    try {
      return this.deviceService.findByOwnerAddress(ownerAddress);
    } catch (error) {
      throw error;
    }
  }

  @Put('/:id')
  async updateById(@Param('id') id: string, @Body() device: UpdateDevice) {
    try {
      return this.deviceService.updateById(id, device);
    } catch (error) {
      throw error;
    }
  }
}
