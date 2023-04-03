import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { hashObject } from 'src/util/hash-object';
import { ObjectStoreCreateDto } from './dto/object-store-create.dto';
import { ObjectStore } from './interfaces/object-store.interface';
import { OBJECT_STORE_MODEL } from './object-store.providers';

@Injectable()
export class ObjectStoreService {
  constructor(
    @Inject(OBJECT_STORE_MODEL)
    private objectStoreModel: Model<ObjectStore>,
  ) {}

  async create(objectStore: ObjectStoreCreateDto) {
    try {
      const hash_string = hashObject(objectStore);

      const objectStoreModel = new this.objectStoreModel({
        hash: hash_string,
        data: objectStore,
      });

      return objectStoreModel.save();
    } catch (error) {
      throw error;
    }
  }

  async findByID(id: string) {
    try {
      const objectStore = this.objectStoreModel.findById(id);

      return objectStore;
    } catch (error) {
      throw error;
    }
  }

  async findByIDs(ids: string[]) {
    try {
      const objectStore = this.objectStoreModel.find({
        _id: { $in: ids },
      });
      return objectStore;
    } catch (error) {
      throw error;
    }
  }

  async findAll(ids?: string[]) {
    try {
      if (ids) {
        return this.findByIDs(ids);
      }

      const objectStore = this.objectStoreModel.find();
      return objectStore;
    } catch (error) {
      throw error;
    }
  }
}
