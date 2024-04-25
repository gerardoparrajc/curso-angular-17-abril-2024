import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'potenciaDosPipe',
  standalone: true
})
export class PotenciaDosPipePipe implements PipeTransform {

  transform(exponente: number, ...args: number[]): number {
    return Math.pow(2, exponente);
  }

}
