import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { CurrencyTickersRequest, CurrencyTickersResp } from 'src/app/interfaces/currency-ticker';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css'],
})
export class CoinDetailComponent implements OnInit {
  constructor(private backendService: BackendService, private route: ActivatedRoute) {}
  symbol = 'BTC';
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
    const currencyTickersRequest: CurrencyTickersRequest = { ids: this.symbol };
    this.backendService
      .get<CurrencyTickersResp[]>(API_SOURCE.NOMICS, 'currencies/ticker', currencyTickersRequest as Record<string, unknown>)
      .subscribe((response) => {
        this.coinTicker = response[0];
      });
  }
}
