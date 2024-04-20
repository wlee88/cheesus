import { Module } from '@nestjs/common';
import { CheesesModule } from './modules/cheeses/cheeses.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
      DatabaseModule,
      CheesesModule
  ],
})
export class AppModule {}
