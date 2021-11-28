import { CoinDataCacheService } from './../coin-data-cache.service';
import { Component, OnInit } from '@angular/core';
import { faCaretDown, faCaretUp, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CurrencyTickersResp } from 'src/app/interfaces/currency-ticker';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-overall-table',
  templateUrl: './overall-table.component.html',
  styleUrls: ['./overall-table.component.css'],
})
export class OverallTableComponent implements OnInit {
  constructor(private coinDataCache: CoinDataCacheService) { }
  readonly totalPages: number = 50;
  readonly dataPerPage: number = 10;
  readonly pageSlideSize: number = 5;
  readonly faCaretUp: IconDefinition = faCaretUp;
  readonly faCaretDown: IconDefinition = faCaretDown;
  currencyTickers!: CurrencyTickersResp[];
  isLoading = false;
  ngOnInit(): void {
  }

  // let pagination emit to trigger the first call
  getData(pageIndex: number): void {
    this.isLoading = true;
    this.coinDataCache
      .getPage(pageIndex).pipe(take(1)).subscribe((data) => {
        // console.log(data);
        this.currencyTickers = data;
        this.isLoading = false;
      },
        () => {
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        });
  }
}
