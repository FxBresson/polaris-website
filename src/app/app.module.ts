import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { StrategyComponent } from './pages/strategy/strategy.component';
import { SkillRatingComponent } from './components/skill-rating/skill-rating.component';

import { RequesterService } from './services/requester.service';
import { UserStoreService } from './services/stores/user.store.service';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    StatisticsComponent,
    StrategyComponent,
    SkillRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RequesterService,
    UserStoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
