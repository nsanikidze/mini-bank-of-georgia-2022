import {  Pipe, PipeTransform} from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'bgNumberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) {
  }

  transform(value: number) {
    const format = '1.2-2';
    return this.decimalPipe.transform(value, format);
  }

}
