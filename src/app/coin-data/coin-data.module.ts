import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { OverallTableComponent } from './overall-table/overall-table.component';

@NgModule({
  declarations: [CoinDetailComponent, OverallTableComponent],
  imports: [CommonModule],
})
export class CoinDataModule {}
