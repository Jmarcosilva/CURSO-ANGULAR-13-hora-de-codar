import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula19ItemDetalheComponent } from './aula19-item-detalhe.component';

describe('Aula19ItemDetalheComponent', () => {
  let component: Aula19ItemDetalheComponent;
  let fixture: ComponentFixture<Aula19ItemDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula19ItemDetalheComponent]
    });
    fixture = TestBed.createComponent(Aula19ItemDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
