import { Injectable } from '@angular/core';
import { Cheese } from '@cheesus/contracts';

@Injectable()
export class PricePerKiloCalculatorService {
  calculatePrice(pricePerKilo: number, desiredWeightInKilos: number): number {
    return pricePerKilo * desiredWeightInKilos;
  }
}
