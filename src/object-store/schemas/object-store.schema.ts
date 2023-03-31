import * as mongoose from 'mongoose';

export const ObjectStoreSchema = new mongoose.Schema({
  hash: String,
  data: Object,
});
