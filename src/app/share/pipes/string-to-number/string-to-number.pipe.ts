import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToNumber',
})
export class StringToNumberPipe implements PipeTransform {
  transform(str: string, requiredType: 'int' | 'float'): number {
    switch (requiredType) {
      case 'int':
        return parseInt(str);
      case 'float':
        return parseFloat(str);
    }
  }
}
