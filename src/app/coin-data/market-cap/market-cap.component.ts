import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { Component, OnInit } from '@angular/core';
import { CurrencyTickersRequest, CurrencyTickersResp } from 'src/app/interfaces/currency-ticker';

@Component({
  selector: 'app-market-cap',
  templateUrl: './market-cap.component.html',
  styleUrls: ['./market-cap.component.css'],
})
export class MarketCapComponent implements OnInit {
  constructor(private backendService: BackendService) {}
  currencyTickersResp!: CurrencyTickersResp;
  ngOnInit(): void {
    const currencyTickersRequest: CurrencyTickersRequest = { ids: 'BTC' };
    this.backendService
      .get<CurrencyTickersResp[]>(API_SOURCE.NOMICS, 'currencies/ticker', currencyTickersRequest as Record<string, unknown>)
      .subscribe((data) => {
        this.currencyTickersResp = data[0];
      });
  }
}
