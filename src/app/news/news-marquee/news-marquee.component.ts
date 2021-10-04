import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { NewsData } from 'src/app/interfaces/news';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-news-marquee',
  templateUrl: './news-marquee.component.html',
  styleUrls: ['./news-marquee.component.css'],
})
export class NewsMarqueeComponent implements OnInit {
  news!: NewsData[];
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  private getNews(): void {
    this.newsService
      .getNews()
      .pipe(
        take(1),
        map((response) => response.data)
      )
      .subscribe((newsData) => {
        this.news = newsData;
      });
  }
}
