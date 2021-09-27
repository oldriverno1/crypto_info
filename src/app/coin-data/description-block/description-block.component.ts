import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { Component, Input, OnInit } from '@angular/core';
import { MetaDataRequest, MetaDataResponse } from 'src/app/interfaces/currency-metadata';

@Component({
  selector: 'app-description-block',
  templateUrl: './description-block.component.html',
  styleUrls: ['./description-block.component.css'],
})
export class DescriptionBlockComponent implements OnInit {
  constructor(private backendService: BackendService) {}
  @Input() symbol!: string;
  coinMetaData!: MetaDataResponse;
  ngOnInit(): void {
    this.getMetaData();
  }

  private getMetaData(): void {
    const metaDataRequest: MetaDataRequest = { ids: this.symbol };
    this.backendService
      .get<MetaDataResponse[]>(API_SOURCE.NOMICS, 'currencies', metaDataRequest as unknown as Record<string, unknown>)
      .subscribe((data) => {
        this.coinMetaData = data[0];
        console.log(this.coinMetaData);
      });
  }
}
