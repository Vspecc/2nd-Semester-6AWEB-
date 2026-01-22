import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products'; // Fixed import name

describe('ProductsService', () => { // Fixed describe description
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService); // Fixed injection token
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
