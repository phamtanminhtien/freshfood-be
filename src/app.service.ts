import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    // return 'Hello World! ' + process.env.DB_NAME;
    return {
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: true,
    };
  }
}
