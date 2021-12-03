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
  

  constructor() {
    this.hour = -1;
    this.yield = 0;
    this.consumption=0;
   }

  ngOnInit(): void {
  }

  barWidth() {
    const maxVal = Math.max( this.yield, this.consumption);
    const styles = {
       'width': maxVal + 'px'
    };
    return styles;
 }

}
