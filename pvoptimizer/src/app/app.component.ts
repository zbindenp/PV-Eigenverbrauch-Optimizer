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

  constructor(private forecastService: ForecastService){}

  getMaxValue(): number {
    let maxValue = 0;
    this.getForecastValues().forEach((val)=> {
      maxValue = Math.max(maxValue, val.consumption, val.yield);
    });
    return maxValue;
  }

  getForecastValues(): HourValue[] {
     return this.forecastService.get();
   }
}
