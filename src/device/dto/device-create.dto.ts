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

  @ApiProperty({
    isArray: true,
    type: Station,
  })
  stations: Station[];
}
