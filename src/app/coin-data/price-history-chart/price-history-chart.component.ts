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
  readonly highcharts: typeof Highcharts = Highcharts; // required
  updateFlag = false;
  chartOptions: Highcharts.Options = {
    title: { text: 'BTC-USDT' },
    credits: { enabled: false },
    series: [{ data: [], type: 'line' }],
    yAxis: { opposite: true, title: { text: '價格' } },
  };

  ngOnInit(): void {
    this.beforeChartInit();
    this.getPriceData();
  }

  private beforeChartInit(): void {
    this.highcharts.setOptions({ lang: { thousandsSep: ',' } });
  }

  private getPriceData(): void {
    const klineRequest: KlineRequest = { symbol: 'BTCUSDT', interval: '1d' };
    this.backendService
      .get<(number | string)[][]>(API_SOURCE.BINANCE, 'klines', klineRequest as unknown as Record<string, unknown>)
      .subscribe((priceData) => {
        this.plotChart(priceData);
      });
  }

  private plotChart(priceData: (number | string)[][]): void {
    const closePrices: number[] = [];
    const xAxisCategories: string[] = [];
    for (const data of priceData) {
      xAxisCategories.push(new Date(data[KlineResponseIndex.closeTime]).toLocaleDateString('zh-Hans-CN'));
      closePrices.push(parseFloat(data[KlineResponseIndex.close] as string));
    }
    console.log(closePrices);
    this.chartOptions.series = [{ data: closePrices, type: 'line', name: 'BTCUSDT price' }];
    this.chartOptions.xAxis = { categories: xAxisCategories, tickInterval: 100 };
    this.updateFlag = true;
    console.log(this.updateFlag);
  }
}
