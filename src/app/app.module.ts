import { CoinDataModule } from './coin-data/coin-data.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PriceMarqueeComponent } from './price-marquee/price-marquee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PriceMarqueeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CoinDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
