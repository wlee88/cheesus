import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { CheeseComponent } from './features/cheese/cheese.component';
import { CheesePage } from './pages/cheese/cheese.page';
import { PriceCalculatorPage } from './pages/price-calculator/price-calculator.page';


const appRoutes: Routes = [
  { path: '', component: HomePage },
  { path: 'cheese/:id', component: CheesePage },
  { path: 'calculator', component: PriceCalculatorPage },
  { path: '**', component: NotFoundPage },
];
export const routes: Routes = appRoutes;
