import { Component, OnInit } from '@angular/core';
import { BackendService, API_SOURCE } from 'src/app/core/backend.service';
import { faCaretDown, faCaretUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CurrencyTickersResp, CurrencyTickersRequest } from 'src/app/interfaces/currency-ticker';
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
  isLoading = false;
  ngOnInit(): void {
    this.getData(1);
  }

  getData(pageIndex: number): void {
    this.isLoading = true;
    const currencyTickersRequest: CurrencyTickersRequest = {
      'per-page': this.dataPerPage,
      convert: 'TWD',
      page: pageIndex,
      status: 'active',
    };
    this.backendService
      .get<CurrencyTickersResp[]>(API_SOURCE.NOMICS, 'currencies/ticker', currencyTickersRequest as Record<string, unknown>)
      .subscribe(
        (data) => {
          console.log(data);
          this.currencyTickers = data;
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        }
      );
  }
}
