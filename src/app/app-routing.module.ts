import { OverallTableComponent } from './coin-data/overall-table/overall-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailComponent } from './coin-data/coin-detail/coin-detail.component';

const routes: Routes = [
  { path: '', component: OverallTableComponent },
  { path: 'coin-detail', component: CoinDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
