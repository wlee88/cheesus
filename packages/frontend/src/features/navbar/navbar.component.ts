import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterModule]
})
export class NavbarComponent {
  constructor() {}
}
