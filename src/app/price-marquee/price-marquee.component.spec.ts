import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceMarqueeComponent } from './price-marquee.component';

describe('PriceMarqueeComponent', () => {
  let component: PriceMarqueeComponent;
  let fixture: ComponentFixture<PriceMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceMarqueeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
