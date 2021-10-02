import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMarqueeComponent } from './news-marquee/news-marquee.component';

@NgModule({
  exports: [NewsMarqueeComponent],
  declarations: [NewsMarqueeComponent],
  imports: [CommonModule],
})
export class NewsModule {}
