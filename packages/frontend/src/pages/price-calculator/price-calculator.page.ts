import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheeseServiceModule } from '../../features/cheese-service/cheese-service.module';
import { CheeseService } from '../../features/cheese-service/cheese.service';
import { Cheese } from '@cheesus/contracts';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  PricePerKiloCalculatorService
} from '../../features/price-per-kilo-calculator-service/price-per-kilo-calculator.service';
import {
  PricePerKiloCalculatorServiceModule
} from '../../features/price-per-kilo-calculator-service/price-per-kilo-calculator-service.module';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

// TODO: VALIDATION on price/number input
@Component({
  standalone: true,
  selector: 'price-calculator',
  templateUrl: './price-calculator.page.html',
  imports: [RouterModule, CheeseServiceModule, PricePerKiloCalculatorServiceModule, ReactiveFormsModule, AsyncPipe, CurrencyPipe]
})
export class PriceCalculatorPage implements OnInit{
  cheeses: Cheese[] = []
  selectedCheese: Cheese | undefined
  priceInput = new FormControl()
  price$: Observable<number> | undefined

  constructor(private readonly cheeseService: CheeseService, private readonly pricePerKiloCalculatorService: PricePerKiloCalculatorService) {
  }
  async ngOnInit(): Promise<void> {
    // This will do for now - but we really need an endpoint specific for getting cheese names and their prices specifically
    this.cheeses = await this.cheeseService.getCheeses()
    this.selectedCheese = this.cheeses[0]

    this.price$ = this.priceInput.valueChanges.pipe(map(value => this.pricePerKiloCalculatorService.calculatePrice(this.selectedCheese?.pricePerKilo || 0, value)))
  }

  onCheeseSelected(event: Event): void {
    const element = event.target as HTMLSelectElement
    const id = element.value
    this.selectedCheese = this.cheeses.find(cheese => cheese.id.toString() === id)
  }
}
