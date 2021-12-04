import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursToTime'
})
export class HoursToTimePipe implements PipeTransform {

  transform(hours: number): string {
    return hours.toString().padStart(2, '0') + ':00';
  }

}
