import { TestBed } from '@angular/core/testing';

import { AdminAuthgaurdService } from './admin-authgaurd.service';

describe('AdminAuthgaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAuthgaurdService = TestBed.get(AdminAuthgaurdService);
    expect(service).toBeTruthy();
  });
});
