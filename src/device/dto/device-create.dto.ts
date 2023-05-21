import { ApiProperty } from '@nestjs/swagger';

export class Station {
  @ApiProperty()
  name: string;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  latitude: number;
}

export class CreateDevice {
  @ApiProperty()
  ownerAddress: string;

  @ApiProperty()
  serial: string;

  @ApiProperty({
    isArray: true,
    type: Station,
  })
  stations: Station[];

  @ApiProperty()
  nextAddress: string;

  @ApiProperty()
  active?: boolean;

  @ApiProperty()
  productId?: number;
}
