import { ApiProperty } from '@nestjs/swagger';

export class ObjectStoreGetAll {
  @ApiProperty({
    description: 'The id, ids',
    required: false,
  })
  id: string;
}
