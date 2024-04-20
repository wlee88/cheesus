import { Component, input } from '@angular/core';
import { Cheese } from '@cheesus/contracts';
import { RouterLink } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';
@Component({
  standalone: true,
  selector: 'cheese',
  imports: [
    RouterLink,
    NgStyle,
    NgClass
  ],
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss']
})
export class CheeseComponent {
  isPreview = input<boolean>()
  cheese = input.required<Cheese>()
}
