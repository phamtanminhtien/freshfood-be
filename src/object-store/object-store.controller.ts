import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ObjectStoreCreateDto } from './dto/object-store-create.dto';
import { ObjectStoreGetAll } from './dto/object-store-get-all.dto';
import { ObjectStoreService } from './object-store.service';

@Controller('object-stores')
@ApiTags('ObjectStore')
export class ObjectStoreController {
  constructor(private objectStoreService: ObjectStoreService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
    },
  })
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
      const res = await this.objectStoreService.findByID(id);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async getAllObjectStore(@Query() query: ObjectStoreGetAll) {
    try {
      const ids = query.id && query.id.split(',');
      const res = await this.objectStoreService.findAll(ids);
      return res.map((item) => item.data);
    } catch (error) {
      throw error;
    }
  }
}
