import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheeseServiceModule } from '../features/cheese-service/cheese-service.module';
import { CheeseService } from '../features/cheese-service/cheese.service';
import { Cheese } from '@cheesus/contracts';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CheeseServiceModule,
    JsonPipe,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cheeses: Cheese[] = []

  constructor(private readonly cheeseService: CheeseService) {}

  async ngOnInit(): Promise<void> {
    this.cheeses = await this.cheeseService.getCheeses()
    console.log(this.cheeses)
  }
}
