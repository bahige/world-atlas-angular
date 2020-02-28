import { TestBed } from '@angular/core/testing';

import { CountriesGetterService } from './countries-getter.service';

describe('CountriesGetterService', () => {
  let service: CountriesGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
