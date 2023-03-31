import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        (() => {
          console.log(process.env.MONGODB_URI);
          return process.env.MONGODB_URI;
        })(),
      ),
  },
];
