import { CheeseCalculationService } from './cheese-calculation.service';

describe('CheeseCalculationService', () => {
  let sut: CheeseCalculationService

  beforeAll(() => {
    sut = new CheeseCalculationService()
  })

  describe('calculatePrice', () => {
    describe('given a weight in kilos and a price per kilo', () => {
      it('should return the correct price', () => {
        const result = sut.calculatePrice(5, 2)
        expect(result).toEqual(10);
      })
    })
  })
})
