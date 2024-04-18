import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheeseServiceModule } from '../features/cheese-service/cheese-service.module';
import { CheeseService } from '../features/cheese-service/cheese.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CheeseServiceModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  constructor(private readonly cheeseService: CheeseService) {}

  ngOnInit() {
    this.cheeseService.getCheeses().then(console.log)
  }
}
