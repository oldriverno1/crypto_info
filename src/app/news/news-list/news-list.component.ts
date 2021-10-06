import { Component, OnInit } from '@angular/core';
import { NewsUtils } from '../news-utils';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent extends NewsUtils implements OnInit {
  constructor(newsService: NewsService) {
    super(newsService);
  }

  ngOnInit(): void {
    this.getNews(0, 40, false);
  }
}
