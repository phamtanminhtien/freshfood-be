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

@Controller('devices')
@ApiTags('Devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post()
  async create(@Body() device: CreateDevice) {
    try {
      return this.deviceService.create(device);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async findAll() {
    try {
      return this.deviceService.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    try {
      return this.deviceService.findById(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/:id')
  async deleteById(@Param('id') id: string) {
    try {
      return this.deviceService.deleteById(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/owner/:ownerAddress')
  async findByOwnerAddress(@Param('ownerAddress') ownerAddress: string) {
    try {
      return this.deviceService.findByOwnerAddress(ownerAddress);
    } catch (error) {
      console.log(error);
    }
  }

  @Put('/:id')
  async updateById(@Param('id') id: string, @Body() device: CreateDevice) {
    try {
      return this.deviceService.updateById(id, device);
    } catch (error) {
      console.log(error);
    }
  }

  @Patch('/:id')
  async patchById(
    @Param('id') id: string,
    @Body() device: Partial<CreateDevice>,
  ) {
    try {
      return this.deviceService.updateById(id, device);
    } catch (error) {
      console.log(error);
    }
  }
}
