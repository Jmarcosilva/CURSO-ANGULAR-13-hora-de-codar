import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula05DadosNoTemplateComponent } from './aula05-dados-no-template.component';

describe('Aula05DadosNoTemplateComponent', () => {
  let component: Aula05DadosNoTemplateComponent;
  let fixture: ComponentFixture<Aula05DadosNoTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula05DadosNoTemplateComponent]
    });
    fixture = TestBed.createComponent(Aula05DadosNoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
