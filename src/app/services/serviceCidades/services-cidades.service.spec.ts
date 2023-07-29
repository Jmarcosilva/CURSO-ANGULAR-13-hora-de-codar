import { TestBed } from '@angular/core/testing';

import { ServicesCidadesService } from './services-cidades.service';

describe('ServicesCidadesService', () => {
  let service: ServicesCidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesCidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
