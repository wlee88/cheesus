import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CheeseEntity } from '../../entities/cheese-entity';
import { CreateCheeses1713337203582 } from '../../migrations/1713337203582-CreateCheeses';
import { SeedCheese1713337203582 } from '../../migrations/1713583433738-SeedCheese';


export const getPostgresConnectionOptions = (cfg: ConfigService): TypeOrmModuleOptions => ({
    type: "postgres",
    host: cfg.getOrThrow('DB_HOST'),
    port: cfg.getOrThrow('DB_PORT'),
    username: cfg.getOrThrow('DB_USER'),
    password: cfg.getOrThrow('DB_PASSWORD'),
    database: cfg.getOrThrow('DB_NAME'),
    synchronize: false,
    logging: false,
    entities: [CheeseEntity],
    migrations: [CreateCheeses1713337203582, SeedCheese1713337203582],
    migrationsRun: true,
})

@Module({
  imports: [
      ConfigModule,
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => getPostgresConnectionOptions(configService),
      }),
  ]}
)
export class DatabaseModule {}
