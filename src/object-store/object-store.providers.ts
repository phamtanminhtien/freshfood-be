import { Connection } from 'mongoose';
import { ObjectStoreSchema } from './schemas/object-store.schema';

export const OBJECT_STORE_MODEL = 'OBJECT_STORE_MODEL';

export const objectStoresProviders = [
  {
    provide: OBJECT_STORE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('ObjectStore', ObjectStoreSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
