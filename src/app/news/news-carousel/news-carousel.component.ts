import { NewsData } from 'src/app/interfaces/news';
import { map, take } from 'rxjs/operators';
import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.css'],
})
export class NewsCarouselComponent implements OnInit {
  constructor(private newsService: NewsService) {}
  news!: NewsData[];
  ngOnInit(): void {
    this.setNews();
  }

  private setNews(): void {
    this.newsService
      .getNews()
      .pipe(
        take(1),
        map((newsResp) => newsResp.data)
      )
      .subscribe((news) => {
        this.news = news.slice(0, 20).filter((news) => news.image && news.url);
      });
  }
}
