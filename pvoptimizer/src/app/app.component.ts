import { Component } from '@angular/core';
import { HourValue } from './HourValue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pvoptimizer';
  hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  getForecastValues(): HourValue[] {
     return [
       { "hour": 0, "yield": 23, "consumption":47},
       { "hour": 1, "yield": 67, "consumption":3432},
       { "hour": 2, "yield": 23, "consumption":47},
       { "hour": 3, "yield": 67, "consumption":3432},
       { "hour": 4, "yield": 23, "consumption":47},
       { "hour": 5, "yield": 67, "consumption":3432},
       { "hour": 6, "yield": 23, "consumption":47},
       { "hour": 7, "yield": 67, "consumption":3432},
       { "hour": 8, "yield": 23, "consumption":47},
       { "hour": 9, "yield": 67, "consumption":3432},
       { "hour": 10, "yield": 23, "consumption":47},
       { "hour": 11, "yield": 23, "consumption":47},
       { "hour": 12, "yield": 23, "consumption":47},
       { "hour": 13, "yield": 23, "consumption":47},
       { "hour": 14, "yield": 23, "consumption":47},
       { "hour": 15, "yield": 23, "consumption":47},
       { "hour": 16, "yield": 23, "consumption":47},
       { "hour": 17, "yield": 23, "consumption":47},
       { "hour": 18, "yield": 23, "consumption":47},
       { "hour": 19, "yield": 23, "consumption":47},
       { "hour": 20, "yield": 23, "consumption":47},
       { "hour": 21, "yield": 23, "consumption":47},
       { "hour": 22, "yield": 23, "consumption":47},
       { "hour": 23, "yield": 23, "consumption":47},
     ];
   }
}
