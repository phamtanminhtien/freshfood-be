import { Connection } from 'mongoose';
import { DeviceSchema } from './schemas/device.schema';

export const DEVICE_MODEL = 'DEVICE_MODEL';

export const deviceProviders = [
  {
    provide: DEVICE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Device', DeviceSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
