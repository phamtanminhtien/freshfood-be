import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World! ' + process.env.DB_NAME;
  }
}
