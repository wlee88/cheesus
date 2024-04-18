import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';
import { NavbarComponent } from './features/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
