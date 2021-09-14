import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { PriceMarqueeComponent } from './price-marquee/price-marquee.component';

@NgModule({
  declarations: [HeaderComponent, PriceMarqueeComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, PriceMarqueeComponent],
})
export class OuterTemplateModule {}
