import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monedas'
})
export class MonedasPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const cambio: number = value * 3.73;
    return cambio;
  }

}
