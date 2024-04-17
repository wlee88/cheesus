import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheesesModule } from './cheeses/cheeses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheeseEntity } from './entity/cheese-entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: "postgres",
        host: "localhost",
        port: 5433,
        username: "master",
        password: "password",
        database: "cheesus",
        // synchronize: true should not be set in production as this can result in data loss
        synchronize: true,
        logging: false,
        entities: [CheeseEntity],
        migrations: [],
        subscribers: [],
      }),
      CheesesModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
