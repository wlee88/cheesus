import { CheesesController } from './cheeses.controller'
import { CheesesService } from './cheeses.service';
import { Mock } from 'typemoq'
import { AppModule } from '../app.module';
import { Test } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { CheeseEntity } from '../entity/cheese-entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CheesesModule } from './cheeses.module';

const setup = async () => {
    const moduleFixture = await Test.createTestingModule({
        imports: [AppModule],
    }).compile()

    const app = moduleFixture.createNestApplication()
    const repository = app.get<Repository<CheeseEntity>>(getRepositoryToken(CheeseEntity))
    await app.init()
    return { app, repository }
}


describe('cheeses.controller', () => {
    describe('createCheese', () => {
      describe('with valid', () => {
          it('should return 201', async () => {
            const app= await setup()
              expect(app).toBeTruthy()
          })
      })
    })
})