import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketCapComponent } from './market-cap.component';

describe('RecentTradesComponent', () => {
  let component: MarketCapComponent;
  let fixture: ComponentFixture<MarketCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
