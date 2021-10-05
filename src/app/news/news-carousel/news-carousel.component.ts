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
        const validExtension: ReadonlyArray<string> = ['png', 'jpg', 'jpeg'];
        this.news = news.slice(0, 40).filter((news) => news.image && validExtension.includes(this.getExtension(news.image)));
      });
  }

  private getExtension(url: string | null): string {
    if (!url) {
      return '';
    }
    const extension: string | undefined = url.split(/[#?]/)[0].split('.').pop()?.trim();
    return extension ? extension : '';
  }
}
