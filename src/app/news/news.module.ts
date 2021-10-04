import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMarqueeComponent } from './news-marquee/news-marquee.component';
import { NewsCarouselComponent } from './news-carousel/news-carousel.component';

@NgModule({
  exports: [NewsMarqueeComponent],
  declarations: [NewsMarqueeComponent, NewsCarouselComponent],
  imports: [CommonModule],
})
export class NewsModule {}
