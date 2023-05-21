import * as mongoose from 'mongoose';

export const DeviceSchema = new mongoose.Schema({
  ownerAddress: String,
  serial: String,
  nextAddress: String,
  productId: Number,
  active: {
    type: Boolean,
    default: false,
  },
  stations: [
    {
      name: String,
      longitude: Number,
      latitude: Number,
    },
  ],
});
