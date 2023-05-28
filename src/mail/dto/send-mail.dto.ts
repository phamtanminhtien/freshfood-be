import { ApiProperty } from '@nestjs/swagger';

export class SendMailDto {
  @ApiProperty({
    description: 'The email address of the user to send the email to',
    required: false,
  })
  to: string;

  @ApiProperty({
    description: 'The subject of the email',
    required: false,
  })
  subject: string;

  @ApiProperty({
    description: 'The name of the recipient',
    required: false,
  })
  name: string;

  @ApiProperty({
    description: 'The content of the email',
    required: false,
  })
  content: string;
}
