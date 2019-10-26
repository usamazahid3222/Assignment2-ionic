import { TestBed } from '@angular/core/testing';

import { AllgamesService } from './allgames.service';

describe('AllgamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllgamesService = TestBed.get(AllgamesService);
    expect(service).toBeTruthy();
  });
});
