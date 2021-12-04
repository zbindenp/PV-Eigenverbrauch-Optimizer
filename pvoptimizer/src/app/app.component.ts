import { Component } from '@angular/core';
import { max } from 'rxjs';
import { ForecastService } from './forecast.service';
import { HourValue } from './HourValue';
import { OptimizationData } from './optimization-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pvoptimizer';
  data: HourValue[];
  maxValue: number;
  tip?: string;

  constructor(private forecastService: ForecastService) {
    this.data = [];
    this.maxValue = 0;
    this.tip = '';
  }

  ngOnInit() {
    console.log("init AppComponent");
    this.forecastService.get().subscribe((ret: OptimizationData) => {
      ret.data.forEach((val) => {
        this.maxValue = Math.max(this.maxValue, val.consumption, val.yield);
      });
      this.data = ret.data;
      this.tip = ret.tip;
    })
  }

}
