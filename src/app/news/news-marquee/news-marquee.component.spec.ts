import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMarqueeComponent } from './news-marquee.component';

describe('NewsMarqueeComponent', () => {
  let component: NewsMarqueeComponent;
  let fixture: ComponentFixture<NewsMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMarqueeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
