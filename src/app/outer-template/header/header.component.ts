import { take } from 'rxjs/operators';
import { CoinDataCacheService } from './../../coin-data/coin-data-cache.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loading = false;
  constructor(
    private coinDataCache: CoinDataCacheService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  searchCoin(coinTicker: string): void {
    this.loading = true;
    this.coinDataCache
      .getCoinById(coinTicker)
      .pipe(take(1))
      .subscribe((data) => {
        this.loading = false;
        if (!data) {
          alert(`currency: ${coinTicker} not found`);
          return;
        }
        this.router.navigate(['/coin-detail', coinTicker]);
      });
  }
}
