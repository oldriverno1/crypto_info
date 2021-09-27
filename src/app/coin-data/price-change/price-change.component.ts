import { CurrencyTickersResp } from '../../interfaces/currency-ticker';
import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-price-change',
  templateUrl: './price-change.component.html',
  styleUrls: ['./price-change.component.css'],
})
export class PriceChangeComponent implements OnInit {
  constructor() {}
  readonly faCaretUp: IconDefinition = faCaretUp;
  readonly faCaretDown: IconDefinition = faCaretDown;
  @Input() coinTicker!: CurrencyTickersResp;

  ngOnInit(): void {}
}
