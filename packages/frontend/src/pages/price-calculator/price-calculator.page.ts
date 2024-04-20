import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheeseServiceModule } from '../../features/cheese-service/cheese-service.module';
import { CheeseService } from '../../features/cheese-service/cheese.service';
import { Cheese } from '@cheesus/contracts';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  CheeseCalculationService
} from '../../features/cheese-calculation-service/cheese-calculation.service';
import {
  CheeseCalculationServiceModule
} from '../../features/cheese-calculation-service/cheese-calculation.service.module';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { BehaviorSubject, combineLatest, map, Observable, startWith, Subject } from 'rxjs';

// TODO: VALIDATION on price/number input
@Component({
  standalone: true,
  selector: 'price-calculator',
  templateUrl: './price-calculator.page.html',
  imports: [RouterModule, CheeseServiceModule, CheeseCalculationServiceModule, ReactiveFormsModule, AsyncPipe, CurrencyPipe]
})
export class PriceCalculatorPage implements OnInit{
  cheeses: Cheese[] = []
  selectedCheese$: Subject<Cheese> = new Subject<Cheese>()
  priceInput = new FormControl()
  price$: Observable<number> | undefined

  constructor(private readonly cheeseService: CheeseService, private readonly pricePerKiloCalculatorService: CheeseCalculationService) {
  }
  async ngOnInit(): Promise<void> {
    // This will do for now - but we really need an endpoint specific for getting cheese names and their prices specifically
    this.cheeses = await this.cheeseService.getCheeses()
    this.selectedCheese$.next(this.cheeses[0])

    this.price$ =
      combineLatest([this.selectedCheese$.pipe(startWith(this.cheeses[0])), this.priceInput.valueChanges]).pipe(
        map(([selectedCheese, price]) => {
          console.log({selectedCheese, price})
          return this.pricePerKiloCalculatorService.calculatePrice(selectedCheese.pricePerKilo, price)
        })
      )

  }

  onCheeseSelected(event: Event): void {
    const element = event.target as HTMLSelectElement
    const id = element.value
    const selectedCheese = this.cheeses.find(cheese => cheese.id.toString() === id)
    if (selectedCheese) {
      this.selectedCheese$.next(selectedCheese)
    }
  }
}
