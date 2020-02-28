import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanCountriesComponent } from './american-countries.component';

describe('AmericanCountriesComponent', () => {
  let component: AmericanCountriesComponent;
  let fixture: ComponentFixture<AmericanCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
