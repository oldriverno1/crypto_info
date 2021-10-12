import { CoinDataCacheService } from './../coin-data-cache.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyTickersResp } from 'src/app/interfaces/currency-ticker';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css'],
})
export class CoinDetailComponent implements OnInit {
  constructor(private coinDataCache: CoinDataCacheService, private route: ActivatedRoute) { }
  symbol = '';
  coinTicker!: CurrencyTickersResp;
  ngOnInit(): void {
    this.symbol = this.getRouterParam();
    this.getCoinDetail();
  }

  private getRouterParam(): string {
    const symbol: string | null = this.route.snapshot.paramMap.get('symbol');
    if (!symbol) {
      throw new Error('symbol is required for CoinDetailComponent');
    }
    return symbol;
  }

  private getCoinDetail(): void {
    this.coinDataCache.getCoinById(this.symbol).pipe(take(1)).subscribe((coinData) => {
      this.coinTicker = coinData;
    });
  }
}
