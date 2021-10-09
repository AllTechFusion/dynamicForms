import { TestBed } from '@angular/core/testing';

import { FormAllTechService } from './form-all-tech.service';

describe('FormAllTechService', () => {
  let service: FormAllTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAllTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
