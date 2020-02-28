import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailInfoComponent } from './country-detail-info.component';

describe('CountryDetailInfoComponent', () => {
  let component: CountryDetailInfoComponent;
  let fixture: ComponentFixture<CountryDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
