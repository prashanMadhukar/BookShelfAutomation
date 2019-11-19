import { TestBed } from '@angular/core/testing';

import { SubBookService } from './sub-book.service';

describe('SubBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubBookService = TestBed.get(SubBookService);
    expect(service).toBeTruthy();
  });
});
