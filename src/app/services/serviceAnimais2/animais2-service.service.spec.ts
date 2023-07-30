import { TestBed } from '@angular/core/testing';

import { Animais2ServiceService } from './animais2-service.service';

describe('Animais2ServiceService', () => {
  let service: Animais2ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Animais2ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
