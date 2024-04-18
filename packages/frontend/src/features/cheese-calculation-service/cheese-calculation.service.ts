import { Injectable } from '@angular/core';
import { Cheese } from '@cheesus/contracts';

@Injectable()
export class CheeseCalculationService {
  calculatePrice(pricePerKilo: number, desiredWeightInKilos: number): number {
    return pricePerKilo * desiredWeightInKilos;
  }
}
