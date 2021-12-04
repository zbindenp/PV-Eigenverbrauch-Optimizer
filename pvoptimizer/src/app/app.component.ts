import { Component, ViewChild } from '@angular/core';
import { max } from 'rxjs';
import { Device } from './device';
import { ForecastService } from './forecast.service';
import { HourValue } from './HourValue';
import { OptimizationData } from './optimization-data';
import { MatAccordion } from '@angular/material/expansion';

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
<<<<<<< Updated upstream
  devices: Device[];
=======
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
>>>>>>> Stashed changes

  constructor(private forecastService: ForecastService) {
    this.data = [];
    this.maxValue = 0;
    this.tip = '';
    this.devices = [];
  }

  ngOnInit() {
    console.log("init AppComponent");
    this.forecastService.get().subscribe((ret: OptimizationData) => {
      ret.data.forEach((val) => {
        let sumConsumptions: number = 0;
        val.devices.forEach((dev) => {
          sumConsumptions = sumConsumptions + dev.consumption;
        });
        this.maxValue = Math.max(this.maxValue, sumConsumptions, val.yield);
      });
      this.data = ret.data;
      this.tip = ret.tip;
    })
  }

}
