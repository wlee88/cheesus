import { Injectable } from '@nestjs/common';
import { CheeseEntity } from '../entity/cheese-entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

// Pure cheese interface without any DB annotations
export interface Cheese {
    name: string
    pricePerKilo: number
    description: string
    imageUrl: string
    color: string
}

// Integration tests should be written for this service
@Injectable()
export class CheesesService {
    constructor(
        @InjectRepository(CheeseEntity) private readonly cheeseRepository: Repository<CheeseEntity>
    ) {}

    async get(id: string) {
        return this.cheeseRepository.findOne({ where: { id: Number(id) } })
    }
    // Needs pagination and filtering to support calculator spec
    async getBy(filter?: Partial<Cheese>) {
        return this.cheeseRepository.createQueryBuilder().where(filter).getMany()
    }

    async create(cheese: Cheese) {
        return this.cheeseRepository.save(cheese)
    }

    async update(id: number, cheese: Partial<Cheese>) {
        return this.cheeseRepository.update(id, cheese)
    }

    async remove(id: number) {
        return this.cheeseRepository.delete(id)
    }
}