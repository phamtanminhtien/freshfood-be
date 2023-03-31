import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as hash from 'object-hash';
import { ObjectStoreCreateDto } from './dto/object-store-create.dto';
import { ObjectStore } from './interfaces/object-store.interface';
import { OBJECT_STORE_MODEL } from './object-store.providers';

@Injectable()
export class ObjectStoreService {
  constructor(
    @Inject(OBJECT_STORE_MODEL)
    private catModel: Model<ObjectStore>,
  ) {}

  async create(objectStore: ObjectStoreCreateDto) {
    try {
      const hash_string = hash(objectStore);

      const objectStoreModel = new this.catModel({
        hash: hash_string,
        data: objectStore,
      });

      return await objectStoreModel.save();
    } catch (error) {
      throw error;
    }
  }

  async findByID(id: string) {
    try {
      const objectStore = await this.catModel.findById(id);
      return objectStore;
    } catch (error) {
      throw error;
    }
  }

  async findByIDs(ids: string[]) {
    try {
      const objectStore = await this.catModel.find({
        _id: { $in: ids },
      });
      return objectStore;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const objectStore = await this.catModel.find();
      return objectStore;
    } catch (error) {
      throw error;
    }
  }
}
