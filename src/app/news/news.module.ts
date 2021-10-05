import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMarqueeComponent } from './news-marquee/news-marquee.component';
import { NewsCarouselComponent } from './news-carousel/news-carousel.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  exports: [NewsMarqueeComponent],
  declarations: [NewsMarqueeComponent, NewsCarouselComponent, NewsComponent],
  imports: [CommonModule],
})
export class NewsModule {}
