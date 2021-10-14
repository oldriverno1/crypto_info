import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { KlineRequest, KlineResponseIndex } from 'src/app/interfaces/binance-kline';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
NoDataToDisplay(Highcharts);
@Component({
  selector: 'app-price-history-chart',
  templateUrl: './price-history-chart.component.html',
  styleUrls: ['./price-history-chart.component.css'],
})
export class PriceHistoryChartComponent implements OnInit {
  constructor(private backendService: BackendService) {
    this.chartCallback = (chart: Highcharts.Chart) => {
      this.chartInstance = chart;
      this.getPriceData();
    };
  }
  readonly highcharts: typeof Highcharts = Highcharts; // required
  chartCallback: (chart: Highcharts.Chart) => void;
  chartInstance!: Highcharts.Chart;
  updateFlag = false;
  @Input() symbol!: string;
  chartOptions!: Highcharts.Options;

  ngOnInit(): void {
    this.beforeChartInit();
    this.setChartOptions();
  }

  private setChartOptions(): void {
    this.chartOptions = {
      title: { text: `${this.symbol}-USDT` },
      credits: { enabled: false },
      series: [{ data: [], type: 'line' }],
      yAxis: { opposite: true, title: { text: 'price' } },
      noData: {
        style: {
          fontWeight: 'bold',
          fontSize: '15px',
          color: '#303030',
        },
      },
    };
  }

  private beforeChartInit(): void {
    this.highcharts.setOptions({ lang: { thousandsSep: ',', noData: `no data for ${this.symbol}-USDT` } });
  }

  private getPriceData(): void {
    const klineRequest: KlineRequest = { symbol: `${this.symbol}USDT`, interval: '1d', limit: 200 };
    this.chartInstance.showLoading();
    this.backendService
      .get<(number | string)[][]>(API_SOURCE.BINANCE, 'klines', klineRequest as unknown as Record<string, unknown>)
      .subscribe(
        (priceData) => {
          this.chartInstance.hideLoading();
          this.plotChart(priceData);
        },
        () => {
          // not listed on binace
          while (this.chartInstance.series.length) {
            this.chartInstance.series[0].remove();
          }
          this.chartInstance.hideLoading();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this.chartInstance as any).showNoData(`${this.symbol}-USDT isn't listed on Binace`);
        }
      );
  }

  private plotChart(priceData: (number | string)[][]): void {
    const closePrices: number[] = [];
    const xAxisCategories: string[] = [];
    for (const data of priceData) {
      xAxisCategories.push(new Date(data[KlineResponseIndex.closeTime]).toLocaleDateString('zh-Hans-CN'));
      closePrices.push(parseFloat(data[KlineResponseIndex.close] as string));
    }
    this.chartOptions.series = [{ data: closePrices, type: 'line', name: `${this.symbol}USDT price` }];
    this.chartOptions.xAxis = { categories: xAxisCategories, tickInterval: 40 };
    this.updateFlag = true;
  }
}
