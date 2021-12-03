import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HourValue } from './HourValue';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private httpClient: HttpClient) { }

  public get(): HourValue[] {
    return [
      { "hour": 0, "yield": 23, "consumption": 47 },
      { "hour": 1, "yield": 300, "consumption": 342 },
      { "hour": 2, "yield": 23, "consumption": 47 },
      { "hour": 3, "yield": 60, "consumption": 15 },
      { "hour": 4, "yield": 23, "consumption": 47 },
      { "hour": 5, "yield": 67, "consumption": 78 },
      { "hour": 6, "yield": 23, "consumption": 47 },
      { "hour": 7, "yield": 67, "consumption": 34 },
      { "hour": 8, "yield": 23, "consumption": 47 },
      { "hour": 9, "yield": 67, "consumption": 342 },
      { "hour": 10, "yield": 47, "consumption": 47 },
      { "hour": 11, "yield": 23, "consumption": 47 },
      { "hour": 12, "yield": 23, "consumption": 47 },
      { "hour": 13, "yield": 23, "consumption": 47 },
      { "hour": 14, "yield": 23, "consumption": 47 },
      { "hour": 15, "yield": 23, "consumption": 47 },
      { "hour": 16, "yield": 23, "consumption": 47 },
      { "hour": 17, "yield": 23, "consumption": 47 },
      { "hour": 18, "yield": 23, "consumption": 47 },
      { "hour": 19, "yield": 23, "consumption": 47 },
      { "hour": 20, "yield": 23, "consumption": 47 },
      { "hour": 21, "yield": 23, "consumption": 47 },
      { "hour": 22, "yield": 23, "consumption": 47 },
      { "hour": 23, "yield": 23, "consumption": 47 },
    ];
  }
}
