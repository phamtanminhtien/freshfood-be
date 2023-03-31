import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ObjectStoreCreateDto } from './dto/object-store-create.dto';
import { ObjectStoreService } from './object-store.service';

@Controller('object-stores')
@ApiTags('ObjectStore')
export class ObjectStoreController {
  constructor(private objectStoreService: ObjectStoreService) {}

  @Post()
  async createObjectStore(@Body() objectStoreDto: ObjectStoreCreateDto) {
    try {
      return this.objectStoreService.create(objectStoreDto);
    } catch (error) {
      throw error;
    }
  }

  @Get('/:id')
  async getObjectStoreByID(@Param('id') id: string) {
    try {
      console.log(id);
      return this.objectStoreService.findByID(id);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async getAllObjectStore() {
    try {
      return this.objectStoreService.findAll();
    } catch (error) {
      throw error;
    }
  }
}
