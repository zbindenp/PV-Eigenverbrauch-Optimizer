import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HourValue } from './HourValue'; import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<HourValue[]> {
    return this.httpClient.get<HourValue[]>('http://localhost:3000/data');
  }
}
