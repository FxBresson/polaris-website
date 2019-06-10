import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule, Router } from '@angular/router';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {

  menuItems: MenuItem[] =
    [
      {route: 'statistics', name: 'Statistiques'},
      {route: 'strategy', name: 'Stratégie'}
    ];

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  public navigate(route: string) {
    this.router.navigate([route]);
  }

}
