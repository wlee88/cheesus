import { Component, OnInit } from '@angular/core';
import { CheeseServiceModule } from '../../features/cheese-service/cheese-service.module';
import { CheeseListComponent } from '../../features/cheese-list/cheese-list.component';
import { Cheese } from '@cheesus/contracts';
import { CheeseService } from '../../features/cheese-service/cheese.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'home',
  templateUrl: './home.page.html',
  // align right
  styles: [`.home-menu { text-align: center; }`],
  imports: [CheeseServiceModule, CheeseListComponent, TitleCasePipe]
})
export class HomePage implements OnInit {
  allCheeses: Cheese[] = []
  displayedCheeses: Cheese[] = []
  colors: string[] = []
  selectedColor: string | undefined

  constructor(private readonly cheeseService: CheeseService) {}

  async ngOnInit(): Promise<void> {
    const fetchedCheeses = await this.cheeseService.getCheeses()
    this.displayedCheeses = this.allCheeses = fetchedCheeses
    this.colors = [...new Set(this.allCheeses.map(cheese => cheese.color))]
  }

  onColorFilterClick(color: string | undefined): void {
    this.selectedColor = color
    if (color) {
      this.displayedCheeses = this.allCheeses.filter(cheese => cheese.color === color)
    } else {
      this.displayedCheeses = this.allCheeses
    }
  }
}
