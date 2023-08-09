import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula01IntroducaoComponent } from './aula01-introducao.component';

describe('Aula01IntroducaoComponent', () => {
  let component: Aula01IntroducaoComponent;
  let fixture: ComponentFixture<Aula01IntroducaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aula01IntroducaoComponent]
    });
    fixture = TestBed.createComponent(Aula01IntroducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
