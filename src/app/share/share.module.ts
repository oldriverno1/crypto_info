import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { numberFormatPipe } from './pipes/number-format/number-format.pipe';
import { StringToNumberPipe } from './pipes/string-to-number/string-to-number.pipe';

@NgModule({
  declarations: [numberFormatPipe, StringToNumberPipe],
  imports: [CommonModule],
  exports: [numberFormatPipe, StringToNumberPipe],
})
export class ShareModule {}
