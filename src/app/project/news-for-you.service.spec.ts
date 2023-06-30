import { TestBed } from '@angular/core/testing';

import { NewsForYouService } from './news-for-you.service';

describe('NewsForYouService', () => {
  let service: NewsForYouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsForYouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
