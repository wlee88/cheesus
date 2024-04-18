import { Component, input } from '@angular/core';
import { Cheese } from '@cheesus/contracts';
import { RouterModule } from '@angular/router';
import { CheeseComponent } from '../cheese/cheese.component';

@Component({
  standalone: true,
  imports: [RouterModule, CheeseComponent],
  selector: 'cheese-list',
  templateUrl: './cheese-list.component.html'
})
export class CheeseListComponent {
  cheeses = input.required<Cheese[]>()
}
