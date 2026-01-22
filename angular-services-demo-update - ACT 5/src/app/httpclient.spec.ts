import { TestBed } from '@angular/core/testing';

// The class exported in httpclient.ts is 'HttpClient'
import { HttpClient } from './httpclient';

describe('HttpClient', () => {
  // Update the type to use the correct capital 'C'
  let service: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // Update the injection to use the correct capital 'C'
    service = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
