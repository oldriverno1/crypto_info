import { API_SOURCE, BackendService } from 'src/app/core/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-cap',
  templateUrl: './market-cap.component.html',
  styleUrls: ['./market-cap.component.css'],
})
export class MarketCapComponent implements OnInit {
  constructor(private backendService: BackendService) {}

  ngOnInit(): void {

  }


}
