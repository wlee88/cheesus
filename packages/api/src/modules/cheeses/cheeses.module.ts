import { CheesesService } from './cheeses.service';
import { CheesesController } from './cheeses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheeseEntity } from '../../entities/cheese-entity';
import { Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';

@Module({
    controllers: [CheesesController],
    imports: [TypeOrmModule.forFeature([CheeseEntity]), LoggerModule],
    providers: [CheesesService],
    exports: [CheesesService]
})
export class CheesesModule {}