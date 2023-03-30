import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as hash from 'object-hash';
import { In, Repository } from 'typeorm';
import { ObjectStoreCreateDto } from './dto/object-store-create.dto';
import { ObjectStore } from './entities/object-store.entity';

@Injectable()
export class ObjectStoreService {
  constructor(
    @InjectRepository(ObjectStore)
    private objectStoreRepository: Repository<ObjectStore>,
  ) {}

  async create(objectStore: ObjectStoreCreateDto) {
    try {
      const hash_string = hash(objectStore);

      return await this.objectStoreRepository.save({
        hash: hash_string,
        data: JSON.stringify(objectStore),
      });
    } catch (error) {
      throw error;
    }
  }

  async findByID(id: string) {
    try {
      const objectStore = await this.objectStoreRepository.findOne({
        where: {
          id: id,
        },
      });
      objectStore.data = JSON.parse(objectStore.data);
      return objectStore;
    } catch (error) {
      throw error;
    }
  }

  async findByIDs(ids: string[]) {
    try {
      const objectStore = await this.objectStoreRepository.findBy({
        id: In(ids),
      });
      objectStore.forEach((element) => {
        element.data = JSON.parse(element.data);
      });
      return objectStore;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const objectStore = await this.objectStoreRepository.find();
      objectStore.forEach((element) => {
        element.data = JSON.parse(element.data);
      });
      return objectStore;
    } catch (error) {
      throw error;
    }
  }
}
