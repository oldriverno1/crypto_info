import { NewsRequest } from './../../interfaces/news';
import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { Component, OnInit } from '@angular/core';
import { NewsData, NewsResponse } from 'src/app/interfaces/news';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news-marquee',
  templateUrl: './news-marquee.component.html',
  styleUrls: ['./news-marquee.component.css'],
})
export class NewsMarqueeComponent implements OnInit {
  news!: NewsData[];
  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.getNews();
  }

  private getNews(): void {
    const dateFormat = 'YYYY-MM-DD';
    const newsRequest: NewsRequest = {
      date: `${moment().subtract(7, 'days').format(dateFormat)},${moment().format(dateFormat)}`,
      languages: 'en',
    };
    this.backendService
      .get<NewsResponse>(API_SOURCE.NEWS, 'news', newsRequest as unknown as Record<string, unknown>)
      .pipe(map((response) => response.data))
      .subscribe((news) => {
        this.news = news;
      });
  }
}
