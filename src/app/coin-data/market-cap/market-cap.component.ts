import { Component, Input, OnInit } from '@angular/core';
import { CurrencyTickersResp } from 'src/app/interfaces/currency-ticker';

@Component({
  selector: 'app-market-cap',
  templateUrl: './market-cap.component.html',
  styleUrls: ['./market-cap.component.css'],
})
export class MarketCapComponent implements OnInit {
  constructor() {}
  @Input() coinTicker!: CurrencyTickersResp;

  ngOnInit(): void {}
}
