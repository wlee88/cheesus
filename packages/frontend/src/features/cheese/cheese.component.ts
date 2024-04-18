import { Component, input } from '@angular/core';
import { Cheese } from '@cheesus/contracts';
import { RouterLink } from '@angular/router';
@Component({
  standalone: true,
  selector: 'cheese',
  imports: [
    RouterLink
  ],
  templateUrl: './cheese.component.html'
})
export class CheeseComponent {
  cheese = input.required<Cheese>()
  displayShowMoreLink = input<boolean>()

}
