import * as mongoose from 'mongoose';

export const DeviceSchema = new mongoose.Schema({
  ownerAddress: String,
  stations: [
    {
      name: String,
      longitude: Number,
      latitude: Number,
    },
  ],
});
