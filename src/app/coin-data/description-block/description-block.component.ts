import { CurrencyTickersRequest, CurrencyTickersResp } from './../../interfaces/currency-ticker';
import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { Component, OnInit } from '@angular/core';
import { IconDefinition, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-description-block',
  templateUrl: './description-block.component.html',
  styleUrls: ['./description-block.component.css'],
})
export class DescriptionBlockComponent implements OnInit {
  constructor(private backendService: BackendService) {}
  readonly faCaretUp: IconDefinition = faCaretUp;
  readonly faCaretDown: IconDefinition = faCaretDown;
  private symbol = 'BTC';
  coinTicker!: CurrencyTickersResp;

  ngOnInit(): void {
    this.getCoinDetail();
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
