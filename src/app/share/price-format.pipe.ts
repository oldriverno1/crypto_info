import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
})
export class PriceFormatPipe implements PipeTransform {
  transform(b4FormatPrice: string): string {
    return parseFloat(b4FormatPrice).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
