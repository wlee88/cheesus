import { Module } from '@nestjs/common';
import { CheesesModule } from './cheeses/cheeses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheeseEntity } from './entity/cheese-entity';
import { SeedCheese1713337203582 } from './migrations/1713337203582-SeedCheese';

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
        migrations: [SeedCheese1713337203582],
        migrationsRun: true,
        subscribers: [],
      }),
      CheesesModule
  ],
})
export class AppModule {}
