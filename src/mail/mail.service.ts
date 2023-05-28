import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMailNotification(sendMailDto: SendMailDto) {
    await this.mailerService.sendMail({
      to: sendMailDto.to,
      subject: sendMailDto.subject,
      template: './information',
      context: {
        name: 'as',
        content: 'as',
      },
    });
  }
}
