import { Component, OnInit } from '@angular/core';
import { CheeseServiceModule } from '../../features/cheese-service/cheese-service.module';
import { CheeseListComponent } from '../../features/cheese-list/cheese-list.component';
import { Cheese } from '@cheesus/contracts';
import { CheeseService } from '../../features/cheese-service/cheese.service';

@Component({
  standalone: true,
  selector: 'home',
  templateUrl: './home.page.html',
  imports: [CheeseServiceModule, CheeseListComponent]
})
export class HomePage implements OnInit {
  cheeses: Cheese[] = []

  constructor(private readonly cheeseService: CheeseService) {}

  async ngOnInit(): Promise<void> {
    this.cheeses = await this.cheeseService.getCheeses()
    console.log(this.cheeses)
  }
}
