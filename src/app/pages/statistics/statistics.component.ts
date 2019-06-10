import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  isGlobalStats = true;

  constructor() { }

  ngOnInit() {
  }

  public changeStatType(flag) {
    this.isGlobalStats = flag;
    console.log(this.isGlobalStats);
  }
}
