import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula04CriandoComponentesComponent } from './aula04-criando-componentes.component';

describe('Aula04CriandoComponentesComponent', () => {
  let component: Aula04CriandoComponentesComponent;
  let fixture: ComponentFixture<Aula04CriandoComponentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula04CriandoComponentesComponent]
    });
    fixture = TestBed.createComponent(Aula04CriandoComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
