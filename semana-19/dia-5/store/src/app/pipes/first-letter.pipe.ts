import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const firstLetter: string = value.charAt(0).toUpperCase() + value.slice(1)
    return firstLetter;
  }

}
