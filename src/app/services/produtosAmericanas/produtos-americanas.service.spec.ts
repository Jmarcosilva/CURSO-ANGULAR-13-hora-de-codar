import { TestBed } from '@angular/core/testing';

import { ProdutosAmericanasService } from './produtos-americanas.service';

describe('ProdutosAmericanasService', () => {
  let service: ProdutosAmericanasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosAmericanasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
