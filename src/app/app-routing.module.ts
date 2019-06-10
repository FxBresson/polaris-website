import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticSymbolResolver } from '@angular/compiler';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { StrategyComponent } from './pages/strategy/strategy.component';

const routes: Routes = [
  {
    path: 'statistics',
    component: StatisticsComponent
  },
  {
    path: 'strategy',
    component: StrategyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
