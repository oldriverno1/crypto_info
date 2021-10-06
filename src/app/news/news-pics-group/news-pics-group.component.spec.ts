import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPicsGroupComponent } from './news-pics-group.component';

describe('NewsPicsGroupComponent', () => {
  let component: NewsPicsGroupComponent;
  let fixture: ComponentFixture<NewsPicsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPicsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPicsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
