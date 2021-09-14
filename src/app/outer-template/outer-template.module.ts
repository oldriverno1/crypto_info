import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { PriceMarqueeComponent } from './price-marquee/price-marquee.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, PriceMarqueeComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, PriceMarqueeComponent, FooterComponent],
})
export class OuterTemplateModule {}
