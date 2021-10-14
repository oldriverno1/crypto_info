import { map, shareReplay } from 'rxjs/operators';
import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyTickersRequest, CurrencyTickersResp } from '../interfaces/currency-ticker';

@Injectable({
  providedIn: 'root'
})
export class CoinDataCacheService {
  private readonly CURRENCY_TICKER_API: string = 'currencies/ticker';
  private readonly dataPerPage: number = 10;
  private cacheByIdMap: Map<string, Observable<CurrencyTickersResp>> = new Map();
  private cacheByPageMap: Map<number, Observable<CurrencyTickersResp[]>> = new Map();
  constructor(private backendService: BackendService) { }

  getCoinById(coinId: string): Observable<CurrencyTickersResp> {
    let currencyTicker$: Observable<CurrencyTickersResp> | undefined = this.cacheByIdMap.get(coinId);
    if (!currencyTicker$) {
      const currencyTickersRequest: CurrencyTickersRequest = { ids: coinId };
      currencyTicker$ = this.backendService
        .get<CurrencyTickersResp[]>(API_SOURCE.NOMICS, this.CURRENCY_TICKER_API, currencyTickersRequest as Record<string, unknown>)
        .pipe(map((response) => response[0]), shareReplay());
      this.cacheByIdMap.set(coinId, currencyTicker$);
    }
    return currencyTicker$;
  }

  getPage(pageIndex: number): Observable<CurrencyTickersResp[]> {
    let pageData$: Observable<CurrencyTickersResp[]> | undefined = this.cacheByPageMap.get(pageIndex);
    if (!pageData$) {
      const currencyTickersRequest: CurrencyTickersRequest = {
        'per-page': this.dataPerPage,
        page: pageIndex,
        status: 'active',
      };
      pageData$ = this.backendService
        .get<CurrencyTickersResp[]>(API_SOURCE.NOMICS, this.CURRENCY_TICKER_API, currencyTickersRequest as Record<string, unknown>).pipe(shareReplay());
      this.cacheByPageMap.set(pageIndex, pageData$);
    }
    return pageData$;

  }
}
