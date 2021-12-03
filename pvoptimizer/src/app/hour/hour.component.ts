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
  @Input() maxValue: number;
  

  constructor() {
    this.hour = -1;
    this.yield = 0;
    this.consumption=0;
    this.maxValue=0;
   }

  ngOnInit(): void {
  }

  progressWidth() {
    return Math.min(this.consumption, this.yield) / Math.max( this.yield, this.consumption) * 100;
  }

  barWidth() {
    const maxVal = Math.max( this.yield, this.consumption);
    const percent = maxVal / this.maxValue *100;
    console.log(percent);
    const styles = {
       'width': percent + '%'
    };
    return styles;
 }

}
