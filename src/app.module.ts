import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ObjectStoreModule } from './object-store/object-store.module';
import { ObjectStore } from './object-store/entities/object-store.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [ObjectStore],
      synchronize: true,
    }),
    ObjectStoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
