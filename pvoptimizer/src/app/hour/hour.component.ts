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

  progressWidthYield() {
    return this.yield / this.maxValueYieldOrConsumption() * 100;
  }

  private maxValueYieldOrConsumption() {
    return Math.max(this.yield, this.consumption);
  }

  progressWidthConsumption() {
    return this.consumption / Math.max(this.yield, this.consumption) * 100;
  }

  barWidth() {
    const percent = Math.max(this.yield, this.consumption) / this.maxDayValue * 100;
    return {
      'width': percent + '%',
    };
  }

}
