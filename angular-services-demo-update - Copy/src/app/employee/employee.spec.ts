import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee'; // Fixed import name

describe('EmployeeService', () => { // Fixed describe description
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService); // Fixed injection token
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
