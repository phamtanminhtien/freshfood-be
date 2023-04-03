import { Document } from 'mongoose';

export interface Device extends Document {
  readonly ownerAddress: string;
  readonly stations: [
    {
      name: string;
      longitude: number;
      latitude: number;
    },
  ];
}
