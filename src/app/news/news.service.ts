import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsRequest, NewsResponse } from '../interfaces/news';
import * as moment from 'moment';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private backendService: BackendService) {}
  private readonly CACHE_SIZE: number = 1;
  private cachedNews$: Observable<NewsResponse> | undefined;

  getNews(): Observable<NewsResponse> {
    if (!this.cachedNews$) {
      this.cachedNews$ = this.backendService
        .get<NewsResponse>(API_SOURCE.NEWS, 'news', this.setNewsRequest() as unknown as Record<string, unknown>)
        .pipe(shareReplay(this.CACHE_SIZE));
    }
    return this.cachedNews$;
  }

  private setNewsRequest(): NewsRequest {
    const dateFormat = 'YYYY-MM-DD';
    return {
      date: `${moment().subtract(3, 'days').format(dateFormat)},${moment().format(dateFormat)}`,
      languages: 'en',
      keywords: 'crypto',
      limit: 100,
    };
  }
}
