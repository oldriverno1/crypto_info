import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { numberFormatPipe } from './pipes/number-format/number-format.pipe';
import { StringToNumberPipe } from './pipes/string-to-number/string-to-number.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [numberFormatPipe, StringToNumberPipe, PaginationComponent, LoadingComponent],
  imports: [CommonModule],
  exports: [numberFormatPipe, StringToNumberPipe, PaginationComponent, LoadingComponent],
})
export class ShareModule {}
