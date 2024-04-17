import { CheesesService } from './cheeses.service';
import { CheesesController } from './cheeses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheeseEntity } from '../entity/cheese-entity';
import { Module } from '@nestjs/common';

@Module({
    controllers: [CheesesController],
    imports: [TypeOrmModule.forFeature([CheeseEntity])],
    providers: [CheesesService],
    exports: [CheesesService]
})
export class CheesesModule {}