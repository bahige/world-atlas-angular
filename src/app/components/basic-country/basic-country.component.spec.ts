import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCountryComponent } from './basic-country.component';

describe('BasicCountryComponent', () => {
  let component: BasicCountryComponent;
  let fixture: ComponentFixture<BasicCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
