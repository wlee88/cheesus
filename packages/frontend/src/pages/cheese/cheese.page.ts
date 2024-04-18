import { Component, OnInit } from '@angular/core';
import { CheeseComponent } from '../../features/cheese/cheese.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Cheese } from '@cheesus/contracts';
import { CheeseServiceModule } from '../../features/cheese-service/cheese-service.module';
import { CheeseService } from '../../features/cheese-service/cheese.service';

@Component({
  standalone: true,
  selector: 'cheese-page',
  templateUrl: './cheese.page.html',
  imports: [
    CheeseComponent,
    CheeseServiceModule,
    RouterModule
  ]
})
export class CheesePage implements OnInit {
  cheese: Cheese | undefined
  constructor(private readonly activateRoute: ActivatedRoute, private readonly router: Router, private readonly cheeseService: CheeseService) {}
  async ngOnInit(): Promise<void> {
    const cheeseId = this.activateRoute.snapshot.paramMap.get('id')
    if (!cheeseId) {
      await this.router.navigate(['/not-found'])
    }
    const fetchedCheese = await this.cheeseService.getCheese(cheeseId!)
    if (!fetchedCheese) {
      await this.router.navigate(['/not-found'])
    }
    this.cheese = fetchedCheese
  }

}
