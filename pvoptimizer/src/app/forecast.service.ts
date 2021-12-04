import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HourValue } from './HourValue'; import { of } from 'rxjs';
import { OptimizationData } from './optimization-data';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<OptimizationData> {
    return this.httpClient.get<OptimizationData>( '/api/forecast');
  }
}
