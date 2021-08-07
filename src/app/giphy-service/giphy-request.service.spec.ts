import { TestBed } from '@angular/core/testing';

import { GiphyRequestService } from './giphy-request.service';

describe('GiphyRequestService', () => {
  let service: GiphyRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
