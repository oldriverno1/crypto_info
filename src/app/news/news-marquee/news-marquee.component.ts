import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { Component, OnInit } from '@angular/core';
import { Article, NewsEverythingResponse } from 'src/app/interfaces/news-everything';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news-marquee',
  templateUrl: './news-marquee.component.html',
  styleUrls: ['./news-marquee.component.css'],
})
export class NewsMarqueeComponent implements OnInit {
  news!: Article[];
  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.getNews();
  }

  private getNews(): void {
    this.backendService
      .get<NewsEverythingResponse>(API_SOURCE.NEWS, 'everything', { q: 'crypto' })
      .pipe(map((response) => response.articles))
      .subscribe((news) => {
        this.news = news;
      });
  }
}
