import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
})
export class numberFormatPipe implements PipeTransform {
  transform(b4FormatPrice: string | number): string {
    if (typeof b4FormatPrice == 'string') {
      return (+parseFloat(b4FormatPrice).toFixed(2))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return b4FormatPrice
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      .toString();
  }
}
