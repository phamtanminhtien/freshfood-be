import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SendMailDto } from './dto/send-mail.dto';
import { MailService } from './mail.service';

@Controller('mail')
@ApiTags('Mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post('send')
  async sendMailNotification(@Body() SendMailDto: SendMailDto) {
    try {
      return this.mailService.sendMailNotification(SendMailDto);
    } catch (error) {
      console.log(error);
    }
  }
}
