import { NewsService } from './../news.service';
import { NewsUtils } from './../news-utils';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-pics-group',
  templateUrl: './news-pics-group.component.html',
  styleUrls: ['./news-pics-group.component.css'],
})
export class NewsPicsGroupComponent extends NewsUtils implements OnInit {
  constructor(newsService: NewsService) {
    super(newsService);
  }

  ngOnInit(): void {
    this.getNews(40, 100, true);
  }
}
