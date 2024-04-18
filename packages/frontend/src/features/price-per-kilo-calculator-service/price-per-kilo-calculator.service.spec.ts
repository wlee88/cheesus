import { PricePerKiloCalculatorService } from './price-per-kilo-calculator.service';

describe('PriceCalculatorService', () => {
  let sut: PricePerKiloCalculatorService

  beforeAll(() => {
    sut = new PricePerKiloCalculatorService()
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
