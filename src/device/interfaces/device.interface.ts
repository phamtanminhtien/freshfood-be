import { Document } from 'mongoose';

export interface Station {
  name: string;
  longitude: number;
  latitude: number;
}

export interface Device extends Document {
  readonly ownerAddress: string;
  readonly serial: string;
  readonly stations: Station[];
  readonly active: boolean;
  readonly nextAddress: string;
  readonly productId: number;
}
