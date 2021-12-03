import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent implements OnInit {
  @Input() hour: number;
  @Input() yield: number;
  @Input() consumption: number;
  @Input() maxDayValue: number;


  constructor() {
    this.hour = -1;
    this.yield = 0;
    this.consumption = 0;
    this.maxDayValue = 0;
  }

  ngOnInit(): void {

  }

  progressWidth() {
    return Math.min(this.consumption, this.yield) / Math.max(this.yield, this.consumption) * 100;
  }

  barWidth() {
    const maxVal = Math.max(this.yield, this.consumption);
    const percent = maxVal / this.maxDayValue * 100;
    const styles = {
      'width': percent + '%',
      'background-color': 'red',
      'color': 'red',
    };
    return styles;
  }

  progressbarColor() {
    if (this.consumption == this.yield) {
      return 'accent';
    }
    if (this.consumption > this.yield) {
      return 'warn';
    }
    return 'primary';
  }

}
