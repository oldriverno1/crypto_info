import { Component, OnInit } from '@angular/core';
import { BackendService, API_SOURCE } from 'src/app/core/backend.service';
import { faCaretDown, faCaretUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-overall-table',
  templateUrl: './overall-table.component.html',
  styleUrls: ['./overall-table.component.css'],
})
export class OverallTableComponent implements OnInit {
  constructor(private backendService: BackendService) {}
  readonly totalPages: number = 80;
  readonly dataPerPage: number = 10;
  readonly pageSlideSize: number = 5;
  readonly faCaretUp: IconDefinition = faCaretUp;
  readonly faCaretDown: IconDefinition = faCaretDown;
  currencyTickers!: CurrencyTickersResp[];
  ngOnInit(): void {
    this.getData(1);
  }

  getData(pageIndex: number): void {
    const currencyTickersRequest: CurrencyTickersRequest = {
      'per-page': this.dataPerPage,
      convert: 'TWD',
      page: pageIndex,
      status: 'active',
    };
    this.backendService
      .get<CurrencyTickersResp[]>(
        API_SOURCE.NOMICS,
        'currencies/ticker',
        currencyTickersRequest as Record<string, unknown>
      )
      .subscribe((data) => {
        console.log(data);
        this.currencyTickers = data;
      });
  }
}

export interface IntervalDetail {
  volume: string;
  price_change: string;
  price_change_pct: string;
  volume_change: string;
  volume_change_pct: string;
  market_cap_change: string;
  market_cap_change_pct: string;
}

export interface CurrencyTickersResp {
  id: string;
  currency: string;
  symbol: string;
  name: string;
  logo_url: string;
  status: string;
  price: string;
  price_date: Date;
  price_timestamp: Date;
  circulating_supply: string;
  max_supply: string;
  market_cap: string;
  market_cap_dominance: string;
  num_exchanges: string;
  num_pairs: string;
  num_pairs_unmapped: string;
  first_candle: Date;
  first_trade: Date;
  first_order_book: Date;
  rank: string;
  rank_delta: string;
  high: string;
  high_timestamp: Date;
  '1d': IntervalDetail;
  '7d': IntervalDetail;
  '30d'?: IntervalDetail;
  '365d'?: IntervalDetail;
  ytd: IntervalDetail;
}

export interface CurrencyTickersRequest {
  ids?: string;
  interval?: string;
  convert?: string;
  status?: 'active' | 'inactive' | 'dead';
  filter?: 'any' | 'new';
  sort?: 'rank' | 'first_priced_at';
  'include-transparency'?: boolean;
  'per-page'?: number;
  page?: number;
}
