import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsMarqueeComponent } from './news-marquee/news-marquee.component';
import { NewsCarouselComponent } from './news-carousel/news-carousel.component';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsPicsGroupComponent } from './news-pics-group/news-pics-group.component';

@NgModule({
  exports: [NewsMarqueeComponent],
  declarations: [NewsMarqueeComponent, NewsCarouselComponent, NewsComponent, NewsListComponent, NewsPicsGroupComponent],
  imports: [CommonModule],
})
export class NewsModule {}
