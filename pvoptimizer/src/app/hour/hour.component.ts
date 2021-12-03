import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent implements OnInit { 
  @Input() hour: number;

  constructor() {
    this.hour = -1;
   }

  ngOnInit(): void {
  }

}
