import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';
import { NewsData } from '../interfaces/news';
import { NewsService } from './news.service';

export class NewsUtils {
  constructor(protected newsService: NewsService) {}
  public news: NewsData[] | undefined;
  protected getNews(startIndex: number, endIndex: number, withPicture: boolean): void {
    this.newsService
      .getNews()
      .pipe(
        take(1),
        map((newsResp) => newsResp.data)
      )
      .subscribe((news) => {
        const validExtension: ReadonlyArray<string> = ['png', 'jpg', 'jpeg'];

        this.news = news.slice(startIndex, endIndex).filter((news) => {
          if (withPicture) {
            return news.image && validExtension.includes(this.getExtension(news.image));
          }
          return !(news.image && validExtension.includes(this.getExtension(news.image)));
        });
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
