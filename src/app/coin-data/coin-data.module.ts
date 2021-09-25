import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { OverallTableComponent } from './overall-table/overall-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PriceHistoryChartComponent } from './price-history-chart/price-history-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DescriptionBlockComponent } from './description-block/description-block.component';
@NgModule({
  declarations: [CoinDetailComponent, OverallTableComponent, PriceHistoryChartComponent, DescriptionBlockComponent],
  imports: [CommonModule, FontAwesomeModule, ShareModule, HighchartsChartModule],
})
export class CoinDataModule {}
