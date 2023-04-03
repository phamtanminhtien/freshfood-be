import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DEVICE_MODEL } from './device.providers';
import { CreateDevice } from './dto/device-create.dto';
import { Device } from './interfaces/device.interface';

@Injectable()
export class DeviceService {
  constructor(
    @Inject(DEVICE_MODEL)
    private deviceModel: Model<Device>,
  ) {}

  async findAll(): Promise<Device[]> {
    return this.deviceModel.find();
  }

  async findById(id: string): Promise<Device> {
    return this.deviceModel.findById(id);
  }

  async create(device: CreateDevice): Promise<Device> {
    const newDevice = new this.deviceModel(device);
    return newDevice.save();
  }

  async deleteById(id: string): Promise<Device> {
    return this.deviceModel.findByIdAndDelete(id);
  }

  async findByOwnerAddress(ownerAddress: string): Promise<Device[]> {
    const devices = this.deviceModel.find({
      ownerAddress: ownerAddress,
    });
    return devices;
  }

  async updateById(id: string, device: Partial<CreateDevice>): Promise<Device> {
    return this.deviceModel.findOneAndUpdate(
      {
        _id: id,
      },
      device,
    );
  }
}
