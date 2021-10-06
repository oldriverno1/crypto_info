import { NewsUtils } from './../news-utils';
import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.css'],
})
export class NewsCarouselComponent extends NewsUtils implements OnInit {
  constructor(newsService: NewsService) {
    super(newsService);
  }

  ngOnInit(): void {
    this.getNews(0, 40, true);
  }
}
