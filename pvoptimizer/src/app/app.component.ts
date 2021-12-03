import { Component } from '@angular/core';
import { max } from 'rxjs';
import { ForecastService } from './forecast.service';
import { HourValue } from './HourValue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pvoptimizer';
  data: HourValue[];
  maxValue: number;

  constructor(private forecastService: ForecastService) {
    this.data = [];
    this.maxValue = 0;
  }

  ngOnInit() {
    console.log("init AppCOmponent");
    this.forecastService.get().subscribe((ret: HourValue[]) => {
      ret.forEach((val) => {
        this.maxValue = Math.max(this.maxValue, val.consumption, val.yield);
      });
      this.data = ret;
    })
  }

}
