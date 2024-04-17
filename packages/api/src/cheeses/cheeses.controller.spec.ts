import { CheesesController } from './cheeses.controller'
import { CheesesService } from './cheeses.service';
import { It, Mock } from 'typemoq'
import { AppModule } from '../app.module';
import { Test } from '@nestjs/testing';
import { Repository, UpdateResult } from 'typeorm';
import { CheeseEntity } from '../entity/cheese-entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cheese } from '@cheesus/contracts';

const setup = async () => {
  const cheesesService = Mock.ofType(CheesesService)
  const sut = new CheesesController(cheesesService.object)
  return { sut, cheesesService }
}

const validCreateCheeseRequest  = {
  name: 'Cheddar',
  pricePerKilo: 10,
  description: 'A hard, sharp cheese',
  imageUrl: 'https://example.com/cheddar.jpg',
  type: 'hard',
  color: 'yellow'
}

// Zod catches bad requests earlier so these aren't tested here
// I would have made these integration tests but running out of time
describe('cheeses.controller', () => {
  describe('createCheese', () => {
    describe('with valid data', () => {
      it('should return 201', async () => {
        const {sut } = await setup()
        const result = await sut.createCheese({headers: {}, body: validCreateCheeseRequest})
        expect(result.status).toEqual(201)
      })
    })

    describe('and an internal error happens', () => {
      it('should return 500', async () => {
        const {sut, cheesesService } = await setup()
        cheesesService.setup(x => x.create(It.isAny())).throws(new Error('Internal error'))
        const result = await sut.createCheese({headers: {}, body: validCreateCheeseRequest})
        expect(result.status).toEqual(500)
      })
    })
  })

  describe('getCheeses', () => {
    it('should return 200', async () => {
      const {sut, cheesesService } = await setup()
      cheesesService.setup(x => x.getAll()).returns(async () => [])
      const result = await sut.getCheeses()
      expect(result.status).toEqual(200)
    })

    it('should return 500 on internal error', async () => {
      const {sut, cheesesService } = await setup()
      cheesesService.setup(x => x.getAll()).throws(new Error('Internal error'))
      const result = await sut.getCheeses()
      expect(result.status).toEqual(500)
    })
  })

  describe('getCheese', () => {
    it('should return 404 when cheese is not found', async () => {
        const {sut, cheesesService } = await setup()
        cheesesService.setup(x => x.get(It.isAny())).returns(async () => null)
        const result = await sut.getCheese({ headers: {}, query: { id: 1 }})
        expect(result.status).toEqual(404)
    })
    it('should return 200 when cheese is found', async () => {
        const {sut, cheesesService } = await setup()
        cheesesService.setup(x => x.get(It.isAny())).returns(async () => ({ id: 1,...validCreateCheeseRequest}))
        const result = await sut.getCheese({ headers: {}, query: { id: 1 }})
        expect(result.status).toEqual(200)
    })
    it('should return 500 on internal error', async () => {
        const {sut, cheesesService } = await setup()
        cheesesService.setup(x => x.get(It.isAny())).throws(new Error('Internal error'))
        const result = await sut.getCheese({ headers: {}, query: { id: 1 }})
        expect(result.status).toEqual(500)
    })
  })

    describe('updateCheese', () => {
      it('should return 200 when cheese is found and update it', async () => {
        const {sut, cheesesService } = await setup()
        const updateResult: UpdateResult = { raw: [], generatedMaps: [], affected: 1 }
        cheesesService.setup(x => x.update(It.isAny(), It.isAny())).returns(async () => updateResult)
        const result = await sut.updateCheese({ headers: {}, params: { id: '1' }, body: validCreateCheeseRequest})
        expect(result.status).toEqual(200)
      })
      it('should return 404 when cheese is not found', async () => {
        const {sut, cheesesService } = await setup()
        const updateResult: UpdateResult = { raw: [], generatedMaps: [], affected: 0 }
        cheesesService.setup(x => x.update(It.isAny(), It.isAny())).returns(async () => updateResult)
        const result = await sut.updateCheese({ headers: {}, params: { id: '1' }, body: validCreateCheeseRequest})
        expect(result.status).toEqual(404)
      })
      it('should return 500 on internal error', async () => {
        const {sut, cheesesService } = await setup()
        const updateResult: UpdateResult = { raw: [], generatedMaps: [], affected: 0 }
        cheesesService.setup(x => x.update(It.isAny(), It.isAny())).throws(new Error('Internal error'))
        const result = await sut.updateCheese({ headers: {}, params: { id: '1' }, body: validCreateCheeseRequest})
        expect(result.status).toEqual(500)
      })
    })
    describe('deleteCheese', () => {
      it('should return 204 when cheese is found and delete it', async () => {
        const {sut, cheesesService } = await setup()
        const deleteResult = { raw: [], generatedMaps: [], affected: 1 }
        cheesesService.setup(x => x.remove(It.isAny())).returns(async () => deleteResult)
        const result = await sut.deleteCheese({ headers: {}, query: { id: 1 }})
        expect(result.status).toEqual(204)
      })
      it('should return 404 when cheese is not found', async () => {
        const {sut, cheesesService } = await setup()
        const deleteResult = { raw: [], generatedMaps: [], affected: 0 }
        cheesesService.setup(x => x.remove(It.isAny())).returns(async () => deleteResult)
        const result = await sut.deleteCheese({ headers: {}, query: { id: 1 }})
        expect(result.status).toEqual(404)
      })
      it('should return 500 on internal error', async () => {
        const {sut, cheesesService } = await setup()
        cheesesService.setup(x => x.remove(It.isAny())).throws(new Error('Internal error'))
        const result = await sut.deleteCheese({ headers: {}, query: { id: 1 }})
        expect(result.status).toEqual(500)
      })
    })

})