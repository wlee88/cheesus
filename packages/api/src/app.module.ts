import { Module } from '@nestjs/common';
import { CheesesModule } from './modules/cheeses/cheeses.module';
import { DatabaseModule } from './modules/database/database.module';
import { LoggerModule } from './modules/logger/logger.module';

@Module({
  imports: [
      DatabaseModule,
      CheesesModule,
      LoggerModule
  ],
})
export class AppModule {}
