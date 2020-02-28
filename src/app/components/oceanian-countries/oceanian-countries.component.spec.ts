import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanianCountriesComponent } from './oceanian-countries.component';

describe('OceanianCountriesComponent', () => {
  let component: OceanianCountriesComponent;
  let fixture: ComponentFixture<OceanianCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceanianCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanianCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
