import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsianCountriesComponent } from './asian-countries.component';

describe('AsianCountriesComponent', () => {
  let component: AsianCountriesComponent;
  let fixture: ComponentFixture<AsianCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsianCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsianCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
