import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css'],
})
export class CoinDetailComponent implements OnInit {
  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    const klineRequest: KlineRequest = { symbol: 'BTCUSDT', interval: '1d' };
    this.backendService
      .get<(number | string)[][]>(API_SOURCE.BINANCE, 'klines', klineRequest as unknown as Record<string, unknown>)
      .subscribe((data) => {
        console.log(data[0][KlineResponseIndex.close]);
      });
  }
}

export interface KlineRequest {
  symbol: string;
  interval: '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d' | '3d' | '1w' | '1M';
  startTime?: number;
  endTime?: number;
  limit?: number;
}

export enum KlineResponseIndex {
  openTime = 0,
  open = 1,
  high = 2,
  low = 3,
  close = 4,
  volume = 5,
  closeTime = 6,
  quoteAssestVolume = 7,
  numOfTrades = 8,
}
