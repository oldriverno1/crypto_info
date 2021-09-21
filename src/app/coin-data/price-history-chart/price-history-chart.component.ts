import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { KlineRequest, KlineResponseIndex } from '../coin-detail/coin-detail.component';
@Component({
  selector: 'app-price-history-chart',
  templateUrl: './price-history-chart.component.html',
  styleUrls: ['./price-history-chart.component.css'],
})
export class PriceHistoryChartComponent implements OnInit {
  constructor(private backendService: BackendService) {}
  Highcharts: typeof Highcharts = Highcharts; // required
  updateFlag = false;
  chartOptions: Highcharts.Options = {
    series: [
      {
        data: [2, 4],
        type: 'line',
      },
    ],
  };

  ngOnInit(): void {
    this.getPriceData();
  }

  private getPriceData(): void {
    const klineRequest: KlineRequest = { symbol: 'BTCUSDT', interval: '1d' };
    this.backendService
      .get<(number | string)[][]>(API_SOURCE.BINANCE, 'klines', klineRequest as unknown as Record<string, unknown>)
      .subscribe((priceData) => {
        const closePrices: number[] = [];
        for (const data of priceData) {
          closePrices.push(parseFloat(data[KlineResponseIndex.close] as string));
        }
        console.log(closePrices);
        this.chartOptions.series = [{ data: closePrices, type: 'line', name: 'BTCUSDT' }];
        this.updateFlag = true;
        console.log(this.updateFlag);
      });
  }
}
